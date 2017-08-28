const path = require('path')

module.exports = {
  env: {
    devBaseUrl: 'http://localhost:3000',
    baseUrl: 'https://enkrateia.me'
  },

  build: {
    vendor: [
      'axios',
      'tippy.js'
    ],

    extractCSS: true
  },

  plugins: [

  ],

  css: [
    { src: '~/assets/sass/index.sass', lang: 'sass' }
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
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
    ],
    script: [
      {
        id: 'dsq-count-scr',
        src: '//enkrateia.disqus.com/count.js',
        async: true
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  modules: [
    ['~/modules/remount-router', {
      controllersPath: path.join(__dirname, 'controllers'),
      controllersGlob: '*.js',
      apiEndpoint: '/api'
    }]
  ]
}
