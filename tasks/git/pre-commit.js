#!/usr/bin/env node

const { join } = require('path')
const { spawn } = require('child_process')

const eslint = join(__dirname, '../../node_modules/.bin/eslint')
const options = '--ext .js,.vue --ignore-path .gitignore .'.split(' ')
const lint = spawn(eslint, options, { stdio: ['inherit', 'inherit', 'inherit'] })

lint.on('close', code => {
  console.log('c', code)
  process.exit(code)
})

/*
var exec = require('child_process').exec
var fs = require('fs')
var eslint = require('../../node_modules/eslint/lib/cli')

var files

var child = exec('git diff-index --cached --name-only HEAD', function (error, stdout, stderr) {
  files = stdout.split('\n').filter(function (i) {
    return /\.js$/.test(i) && fs.existsSync(i)
  })
  if (files.length === 0) {
    return
  }

  var exitCode = eslint.execute.apply(this, files)
  process.exit(exitCode)
})
*/
