module.exports = {
  env: {
    devBaseUrl: 'http://localhost:3000',
    baseUrl: 'https://enkrateia.me'
  },

  build: {
    vendor: [
      'axios'
    ]
  },

  css: [
    { src: '~assets/sass/index.sass', lang: 'sass' }
  ]
}
