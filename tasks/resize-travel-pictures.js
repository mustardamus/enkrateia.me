const fs = require('fs')
const path = require('path')
const jimp = require('jimp')
const series = require('promise-series2')

const SRCPATH = path.join(__dirname, '../assets/travel-pictures')
const DISTPATH = path.join(__dirname, '../static/travel-pictures')
const IMGWIDTH = 1024
const IMGQUALITY = 90
const THUMBWIDTH = 380
const THUMBQUALITY = 75

const flatten = arr => { // https://stackoverflow.com/a/15030117
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

const resize = (img, width, quality, distPath) => {
  return new Promise((resolve, reject) => {
    try {
      img.resize(width, jimp.AUTO).quality(quality).write(distPath, () => {
        resolve()
      })
    } catch (err) {
      reject(err)
    }
  })
}

const handlePicture = picturePath => {
  return new Promise((resolve, reject) => {
    try {
      const srcPath = path.join(SRCPATH, picturePath)
      const distPath = path.join(DISTPATH, picturePath)
      const thumbDistPath = distPath.replace('.JPG', '_thumb.JPG')

      if (fs.existsSync(distPath)) {
        return resolve()
      }

      jimp.read(srcPath)
        .then(img => {
          Promise.all([
            resize(img, IMGWIDTH, IMGQUALITY, distPath),
            resize(img, THUMBWIDTH, THUMBQUALITY, thumbDistPath)
          ]).then(() => {
            console.log(picturePath)
            resolve()
          }).catch(err => { throw err })
        })
        .catch(err => { throw err })
    } catch (err) {
      reject(err)
    }
  })
}

const picturesObj = require('../helpers/travel-pictures-index')
const picturesArr = picturesObj.map(country => {
  return country.cities.map(city => {
    return city.pictures.map(pic => path.join(country.country, city.city, pic))
  })
})

series(handlePicture, flatten(picturesArr))
