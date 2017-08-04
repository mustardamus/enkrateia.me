const pictures = require('../helpers/travel-pictures-index')

module.exports = {
  'GET /travel/pictures': (req, res) => {
    res.json(pictures)
  }
}
