const Nuxt = require('nuxt')
const express = require('express')
let config = require('../nuxt.config.js')

// const bodyParser = require('body-parser')
// const session = require('express-session')

config.dev = !(process.env.NODE_ENV === 'production')

const app = express()
const nuxt = new Nuxt(config)
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '3000'

app.use('/api', require('./api'))
app.use(nuxt.render)

if (config.dev) {
  require('./dev')(app)
}

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`)
})