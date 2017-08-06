const isDev = !(process.env.NODE_ENV === 'production')

module.exports = {
  env: {
    baseUrl: isDev ? 'http://localhost:3000' : 'https://enkrateia.me'
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
      // doesn't really work with the layout, see mounted() in pages
      return { x: 0, y: 0 }
    }
  }
}
