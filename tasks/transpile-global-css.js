// this is a legacy file, css is now extracted with the build.extractCSS
// option in nuxt.config.js

const fs = require('fs')
const path = require('path')
const sass = require('node-sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

const srcPath = path.join(__dirname, '../assets/sass')
const distFilePath = path.join(__dirname, '../static/css/global.css')
const includePaths = [
  srcPath,
  path.join(srcPath, '../../node_modules') // strangely join(__dirname, '../node_modules') doesnt work
]

sass.render({
  file: path.join(srcPath, 'global.sass'),
  includePaths,
  indentedSyntax: true,
  outputStyle: 'compressed'
}, (err, result) => {
  if (err) {
    throw err
  }

  postcss([autoprefixer]).process(result.css).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })

    fs.writeFileSync(distFilePath, result.css, 'utf8')
    console.log('Saved to:', distFilePath)
    console.log('Size:', Math.floor(result.css.length / 1024))
  })
})
