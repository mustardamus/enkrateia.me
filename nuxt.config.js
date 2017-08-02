module.exports = {
  env: {
    devBaseUrl: 'http://localhost:3000',
    baseUrl: 'https://enkrateia.me'
  },

  build: {
    vendor: [
      'axios',
      'tippy.js'
    ]
  },

  css: [
    { src: '~assets/sass/index.sass', lang: 'sass' }
  ],

  loading: {
    color: '#FCBD00'
  },

  router: {
    scrollBehavior (to, from, savedPosition) {
      // doesn't really work, see mounted() in pages
      return { x: 0, y: 0 }
    }
  }
}
