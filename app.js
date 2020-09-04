const express = require('express')
const router = express.Router()
const { routes } = require('./config/routes')


class App {
  constructor() {
    this.app = express()
  }

  async loadRoutingConfigs() {
    try {
      routes.forEach((route) => {
        const [method, endPoint, callback] = route.split(' ')
        const [controllerName, callbackFn] = callback.split('.')
        const controller = require(`./api/controllers/${controllerName}`)
        this.app[method.toLowerCase()](endPoint, controller[callbackFn])
      })
    } catch (e) {
      throw new Error(`Incorrect routing config, with error ${e}`)
    }
  }

  async startServer() {
    await this.loadRoutingConfigs()

    this.app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log('====Start Server====')
    })
  }
}

const app = new App()
app.startServer()
