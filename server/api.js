const path = require('path')
const express = require('express')
const ekso = require('ekso')

const router = express.Router()
const controllers = ekso({
  rootDir: path.join(__dirname, '../controllers')
})

Object.keys(controllers).forEach(resource => {
  const controller = controllers[resource]

  Object.keys(controller).forEach(fullRoute => {
    const [verb, route] = fullRoute.split(' ')
    const routerFunc = router[verb.toLowerCase()]
    let handlers = controller[fullRoute]

    if (typeof routerFunc !== 'function') {
      throw new Error(`Verb "${verb}" on "${fullRoute}" not found`)
    }

    if (typeof handlers === 'function') {
      handlers = [handlers]
    }

    routerFunc.apply(router, [route, ...handlers])
  })
})

module.exports = router
