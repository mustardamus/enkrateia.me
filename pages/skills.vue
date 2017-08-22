<template>
  <div class="container">
    <div class="columns intro">
      <div class="column is-8">
        <h1 class="title is-1">Web-developing Skills</h1>

        <p>
          TL;DR I've came a long way with developing for the web, back when IE6
          was a pain in the ass. I started out with the front-end, but soon
          added the back-end to my stack as well. For about 7 years I code
          exclusively in JavaScript. My current tool belt includes
          <a href="https://vuejs.org/">Vue.js</a>,
          <a href="https://nuxtjs.org/">Nuxt.js</a>,
          <a href="https://expressjs.com/">Express.js</a>,
          <a href="https://facebook.github.io/jest/">Jest</a>,
          <a href="https://www.mongodb.com/">MongoDB</a>,
          <a href="https://www.ubuntu.com/">Ubuntu</a>,
          <a href="https://nginx.org/">Nginx</a> and
          <a href="https://git-scm.com/">Git</a>.
        </p>
      </div>

      <div class="column">
        <ul class="links">
          <li>
            <a href="/pdf/CV-2017-Sebastian-Senf.pdf">
              <icon-cv /> <span>Download my CV as PDF</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mustardamus">
              <icon-github /> <span>See my code at GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="columns voodoo">
      <div class="column">
        <h2 class="title is-3">Front-end</h2>
        <p>
          I started exclusively with the front-end in my 8+ years of being a
          professional. Back when <a href="https://jquery.com/">jQuery</a> was
          considered modern and I had to make sure IE6 looks at least alright.
          Then I used <a href="http://backbonejs.org/">Backbone.js</a> for
          quite a while, along with build-tools such as
          <a href="https://gulpjs.com/">Gulp.js</a>. The next level has been to
          go minimal with <a href="https://npmjs.com">NPM scripts</a> and
          <a href="http://browserify.org/">Browserify</a> to bundle my code.
          Around that time the JavaScript land exploded and I tried out so many
          things. But when I first used <a href="https://vuejs.org/">Vue.js</a>
          (version 0.10) I was instantly in love. This framework helped me to
          win the
          <a href="https://2016.staticshowdown.com/">StaticShowdown 2016</a>
          hackathon (#1 solo, #2 overall) with a
          <nuxt-link to="/posts/static-showdown-hackathon-piffle-game">Speaking
          Game</nuxt-link>. For a job I also learned myself some
          <a href="https://facebook.github.io/react/">React</a>. For building
          my code I use <a href="https://webpack.js.org/">Webpack</a> these
          days.
        </p>
      </div>

      <div class="column">
        <h2 class="title is-3">Back-end</h2>
        <p>
          My first peek into the back-end came when I learned myself some
          <a href="http://rubyonrails.org/">Ruby on Rails</a> after doing one
          year of websites-only. I used RoR for about a year with
          <a href="https://www.mysql.com/">MySQL</a> databases. When
          <a href="https://nodejs.org/">Node.js</a> came along I did go all in
          on JavaScript, with <a href="https://expressjs.com/">Express.js</a>
          or <a href="https://hapijs.com/">Hapi.js</a> as frameworks (I even
          created some simple frameworks myself). These days I love to use
          <a href="https://nuxtjs.org/">Nuxt.js</a> along with it. But I also
          adopted JS for my tool belt and developed tools (like the
          <a href="https://mustardamus.github.io/lehm/">Lehm</a> file-generator)
          myself. For the database I switched to NoSQL, mostly with
          <a href="https://www.mongodb.com/">MongoDB</a>. In 2013 I finished 3rd
          at the <a href="https://www.nodeknockout.com">NodeKnockout</a>
          Hackathon in the category Fun/Utility with a
          smartphone-remote-control for Grooveshark.
        </p>
      </div>
    </div>

    <div class="columns voodoo">
      <div class="column">
        <h2 class="title is-3">Server Setup</h2>
        <p>
          I like to understand the whole chain - from writing code to actually
          run the application and make it available to the world. Therefor I am
          using my own server for my own projects, instead of services. As OS I
          use <a href="https://www.ubuntu.com/">Ubuntu</a>, my HTTP server of
          choice is <a href="https://nginx.org/">Nginx</a>. I also understand
          the common security-pitfalls and try to avoid them with a hardened
          setup, such as using a
          <a href="https://help.ubuntu.com/community/UFW">firewall</a>.
        </p>
      </div>

      <div class="column">
        <h2 class="title is-3">DevOps</h2>
        <p>
          My first <a href="https://git-scm.com/">Git</a> repository dates back
          to 2009, so I've been using version-control basically forever.
          Nowadays I like to use
          <a href="https://github.com/petervanderdoes/gitflow-avh">git-flow</a>
          along with it. Besides Git, I do test-driven-development with
          <a href="https://mochajs.org/">Mocha.js</a> (now learning
          <a href="https://facebook.github.io/jest/">Jest</a>) for years. Other
          than that, DevOps is a pretty new field for me. But I am digging it.
          For example: this website is auto-deployed with a
          <a href="https://github.com/mustardamus/webhook-deploy-server">server</a>
          that is listening to <a href="https://github.com">GitHub</a> webhooks,
          and restarted with <a href="http://pm2.keymetrics.io/">PM2</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconCv from '~/components/icons/si-glyph-document-arrow-down'
import IconGithub from '~/components/icons/Github_w_x2F__circle'

export default {
  head () {
    return {
      title: 'Skills',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
            Sebastian Senf's skills as a professional web-developer.
          `
        }
      ]
    }
  },

  components: { IconCv, IconGithub }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.container
  padding: 50px 30px

.intro
  margin-bottom: 50px

  .title
    font-family: $font1
    color: $color1

  p
    font-family: $font2
    font-size: 1.1em
    color: white
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)

  .links
    li
      a
        display: block
        position: relative
        margin: 20px 0

        span
          padding-left: 38px
          font-size: 1.2em
          font-family: $font1

        svg
          fill: $color1
          width: 30px
          height: 30px
          position: absolute

        &:hover
          svg
            fill: $color2

.voodoo
  margin-bottom: 30px

  .title
    color: $color2
    font-family: $font2

  p
    color: white
    font-family: $font1
</style>
