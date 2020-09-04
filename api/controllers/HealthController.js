class HealthController {
  static check(req, res) {
    res.status(200).send('I am a healthy runner lib')
  }
}

module.exports = HealthController