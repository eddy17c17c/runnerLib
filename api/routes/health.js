const express = require('express')

const router = express.Router()

module.exports = (app) => {
  router.get('/', (req, res) => {
    res.send('I am a healthy runner')
  })

  app.use('/health', router)
}
