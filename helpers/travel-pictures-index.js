const fs = require('fs')
const path = require('path')

const SRCPATH = path.join(__dirname, '../assets/travel-pictures')
const noDots = n => n.substr(0, 1) !== '.'

module.exports = fs.readdirSync(SRCPATH).filter(n => noDots(n))
  .map(country => {
    const citiesDir = path.join(SRCPATH, country)
    const cities = fs.readdirSync(citiesDir).filter(n => noDots(n))
      .map(city => {
        const picturesDir = path.join(SRCPATH, country, city)
        const pictures = fs.readdirSync(picturesDir).filter(n => noDots(n))

        return { city, pictures }
      })

    return { country, cities }
  })

/*
  [
    {
      "country": "United-Kingdom",
      "cities": [
        {
          "city": "Doncaster",
          "pictures": [
            "100_1432.JPG",
            ...
          ]
        },
        ...
      ]
    },
    ...
  ]
*/
