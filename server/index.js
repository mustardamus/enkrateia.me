const path = require('path')
const express = require('express')
const helmet = require('helmet')
const remountRouter = require('remount-router')

// const bodyParser = require('body-parser')
// const session = require('express-session')

const app = express()

app.use(helmet())
app.use(remountRouter({
  expressAppInstance: app,
  controllersPath: path.join(__dirname, '../controllers')
}))

module.exports = {
  path: '/',
  handler: app._router
}
