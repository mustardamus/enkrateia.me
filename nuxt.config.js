module.exports = {
  env: {
    devBaseUrl: 'http://localhost:3000',
    baseUrl: 'https://enkrateia.me'
  },

  build: {
    vendor: [
      'axios',
      'tippy.js'
      // 'vue2-touch-events'
    ]
  },

  plugins: [
    // '~plugins/vue2-touch-events'
  ],

  css: [
    { src: '~assets/sass/main.sass', lang: 'sass' }
  ],

  loading: {
    color: '#FCBD00'
  },

  router: {
    scrollBehavior (to, from, savedPosition) {
      // doesn't really work with the layout, see mounted() in pages
      return { x: 0, y: 0 }
    }
  },

  head: {
    titleTemplate: '%s - Enkrateia.me - Digital Playground of Sebastian Senf',
    title: '...',
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/global.css' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'XXX tbd' }
    ]
  }
}
