---
title: Remount-Router - file-based router for Express.js & Nuxt.js with automatic routes remounting
slug: remount-router-file-based-router-for-express-js-and-nuxt-js-with-automatic-routes-remounting
date: 2017-09-01
---

In the past, when I wanted to automatically restart an
[Express.js](https://expressjs.com/) server (or any app for that matter), I used
tools like [Forever](https://github.com/foreverjs/forever),
[Nodemon](https://github.com/remy/nodemon) or [PM2](http://pm2.keymetrics.io/).
They did the job well, because re-starting the whole server took only a second
or two. That changed when I started to use [Nuxt.js](https://nuxtjs.org/).

I had the same epiphany with Nuxt.js as I had back in the days with
[Vue.js](https://vuejs.org/): That is awesome! And I want to invest my time to
learn this specific framework. Nuxt.js is a framework built on top of Vue.js -
and it's 'universal'. That means it works on the front- as on the back-end. If
you first visit a page, the Vue.js app is rendered on the server. If you browse
further, it is rendered on the client. Thus it is really fast, and you can write
Vue.js all the way. Fantastic!

Behind the scenes Nuxt.js is packaging the client- and the server-code with
[Webpack](https://webpack.js.org/). If I start a Nuxt.js app in development mode
with `nuxt`, it takes about 15-20 seconds to build it initially. But that is
okay, since it also supports
[Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/).
Changes in code will result in just re-bundling the appropriate parts of the
build - resulting in 1-4 seconds of re-bundling. The updated parts of the app is
reloaded automatically. Fantastic!

Most of the time you still want an Express.js server in the back-end instead of
trying to get everything running smoothly on the client and server with Nuxt.js.
It is just easier to make this distinction that this is the server and it will
provide an API for Nuxt.js to consume.

And luckily that is pretty easy too. You can either use
[Nuxt.js as middleware](https://nuxtjs.org/api/nuxt) in your Express.js app, or
your Express.js app as
[middleware in Nuxt.js](https://nuxtjs.org/api/configuration-servermiddleware).

And here is the crux: If you make changes to your API, you need to restart the
server. And because it is connected with Nuxt.js in one way or another, you also
need to restart the Nuxt.js app. That means every time you make changes to your
API, and restart the whole app, Nuxt.js will re-bundle everything. I don't know
about you, but waiting 20 seconds for code-changes to kick in is not acceptable
to me. Not so fantastic.

Of course, one solution would be to not connect the Express.js API server and
the Nuxt.js app at all. Just set the correct IP/port to the API in your request
library you use, and develop your Express.js app normally (using
Forever/Nodemon/PM2 to restart). I tried it before, and I am not a fan of it. I
like to have one single application, one single entry point and command to start
the whole thing.

## Throwing together some code

So I researched the topic of automatic reloading routes in an Express.js app,
and it turns out there are some solutions out there, but none which seems to be
maintained or working the way I want it to work. So it was time to scratch my
own itch and throw together some POC code.

In the following example you'll see a Express.js app which uses Nuxt.js as
middleware, and some custom code to build a router from files, watching these
files and rebuilding/remounting the router on changes.

`./server/index.js`

This is the main entry point to the Express.js app. Note that I register a
router that is returned by the file `api.js` as middleware.

If the app is running in development mode, I also require the file `dev.js`
passing the Express.js app instance. That is where the magic happens.

```javascript
const Nuxt = require('nuxt')
const express = require('express')
let config = require('../nuxt.config.js')

config.dev = !(process.env.NODE_ENV === 'production')

const app = express()
const nuxt = new Nuxt.Nuxt(config)
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '3000'

app.use('/api', require('./api'))
app.use(nuxt.render)

if (config.dev) {
  const builder = new Nuxt.Builder(nuxt)
  builder.build()
  require('./dev')(app)
}

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
```

`./server/api.js`

Here I use another module I have written, [Ekso](/posts/ekso-node-js-module), to
require the whole `./controllers` directory and build an `Object` from it. Then
I iterate over it and build a
[Router](https://expressjs.com/en/4x/api.html#router) based on the verb, routes
and functions of exported `Object`s of the controller files.

This is not necessary in order for the route reloading to work, but I thought
it is a nice convention instead of building the Router manually for each
controller.

```javascript
const path = require('path')
const express = require('express')
const ekso = require('ekso')

const router = express.Router()
const controllers = ekso({
  rootDir: path.join(__dirname, '../controllers')
})

Object.keys(controllers).forEach(resource => {
  const controller = controllers[resource]

  Object.keys(controller).forEach(fullRoute => {
    const [verb, route] = fullRoute.split(' ')
    const routerFunc = router[verb.toLowerCase()]
    let handlers = controller[fullRoute]

    if (typeof routerFunc !== 'function') {
      throw new Error(`Verb "${verb}" on "${fullRoute}" not found`)
    }

    if (typeof handlers === 'function') {
      handlers = [handlers]
    }

    routerFunc.apply(router, [route, ...handlers])
  })
})

module.exports = router
```

`./server/dev.js`

Now for the juicy bits. Here I use the
[Chokidar](https://github.com/paulmillr/chokidar) module for any file change. If
a change happens, I remove any cached `require()`s that are either a controller
file, or the `api.js` from above. This is necessary to apply the file changes.
Remember the Express.js app instance I am passing to this file? I use this to
iterate over the internal Router, finding the route that is created by a
`router` and has the URI `/api`. If found, I simply replace the `handle`
property, which is the `Function` called when the URI `/api/[...]` is requested,
with a new Router created by requiring the `api.js` from above.

```javascript
const path = require('path')
const chokidar = require('chokidar')

const watchGlob = path.join(__dirname, '../controllers/*.js')

module.exports = app => {
  chokidar.watch(watchGlob).on('all', (event, filePath) => {
    Object.keys(require.cache).forEach(m => {
      if (m.includes('/controllers/') || m.includes('server/api.js')) {
        delete require.cache[m]
      }
    })

    app._router.stack.forEach(route => {
      if (route.name === 'router' && route.regexp.test('/api')) {
        route.handle = require('./api')
      }
    })

    console.log('API Reload:', event, filePath)
  })
}
```

## Enter Remount-Router

For the amount of some hacky code, the solution from above worked pretty well. I
wanted to have it as drop-in module instead of several files, and I am pretty
sure other people would benefit from a NPM module as well.

So I sat down and coded `remount-router`. Effectively it works the same as the
code above. I made some improvements here and there, and also wrote tests to
make sure it is working properly.

Check out this quick demo:

![Remount-Router Demo](/images/remount-router.gif)

`remount-router` comes as Express.js middleware, but ultimately I wanted to use
it with Nuxt.js, that's why I have coded this solution in the first place. As I
wrote above, I was using Nuxt.js as middleware in my Express.js app, but with
the arrival of
[`serverMiddleware`](https://nuxtjs.org/api/configuration-servermiddleware) and
[`modules`](https://nuxtjs.org/api/configuration-modules) in Nuxt.js, I turned
it around and use the Express.js API app as middleware in Nuxt.js.

On top of that I wrote a wrapper for a Nuxt.js module. So now it really takes a
couple of lines to implement it:

```javascript
module.exports = {
  modules: [
    'remount-router/nuxt'
  ]
}
```

That's all what is needed to start creating an Express.js API app which also
remounts the routes whenever controller files in the directory `./controllers`
are added, deleted or changed. Of course this behavior can be changed with
custom options. Please see the documentation for that.

### [Remount-Router Code & Documentation @ GitHub](https://github.com/mustardamus/remount-router)
