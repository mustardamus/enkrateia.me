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
  },

  head: {
    titleTemplate: '%s - Enkrateia.me - Digital Playground of Sebastian Senf',
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'XXX tbd' }
    ]
  }
}
