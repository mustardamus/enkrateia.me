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
