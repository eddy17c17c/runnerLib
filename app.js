const express = require('express')
const routes = require('./api/index')

class App {
  constructor() {
    this.app = express()
  }

  async loadApiConfigs(app) {
    routes(app).bind(this)

    app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log('====Start Server====')
    })
  }

  async startServer() {
    const app = express()

    await this.loadApiConfigs(app)
  }
}

const app = new App()
app.startServer()
