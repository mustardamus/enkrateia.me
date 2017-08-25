const pictures = require('../helpers/travel-pictures-index')

module.exports = {
  'GET /pictures' (req, res) {
    res.json(pictures)
  }
}
