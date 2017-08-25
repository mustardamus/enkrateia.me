// legacy code :)

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
