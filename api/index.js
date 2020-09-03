const path = require('path')
const fs = require('fs')

module.exports = (app) => {
  const normalizedPath = path.join(__dirname, 'routes')
  fs.readdirSync(normalizedPath).forEach((file) => {
    const route = require('./routes/' + file)

    route(app)
  })

  return app
}
