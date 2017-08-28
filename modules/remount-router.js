const express = require('express')
const remountRouter = require('remount-router')

module.exports = function (moduleOptions) {
  const app = express()
  const options = Object.assign({}, moduleOptions, { expressAppInstance: app })

  app.use(remountRouter(options))
  this.addServerMiddleware({ path: '/', handler: app._router })
}
