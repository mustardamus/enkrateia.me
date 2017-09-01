const fs = require('fs-extra')
const path = require('path')
const exec = require('child_process').exec

const zeroPadNum = num => {
  if (num < 10) {
    return `0${num}`
  } else {
    return num.toString()
  }
}

const curDate = new Date()
const curYear = curDate.getFullYear().toString()
const curMonth = zeroPadNum(curDate.getMonth() + 1)
const curDay = zeroPadNum(curDate.getDate())
const habitsDir = path.join(__dirname, '../assets/habits')
const curMonthPath = path.join(habitsDir, curYear, curMonth)
const curDayPath = path.join(curMonthPath, `${curDay}.json`)
const habits = require(habitsDir)
const habitsObj = {}

habits.filter(habit => habit.inactive !== true).forEach(habit => {
  habitsObj[habit.id] = 0
})

const habitsJson = JSON.stringify(habitsObj, null, 2)

if (fs.existsSync(curDayPath)) {
  console.log('Error, file already exists:', curDayPath)
} else {
  fs.ensureDirSync(curMonthPath)
  fs.writeFileSync(curDayPath, habitsJson, 'utf8')

  console.log('File created:', curDayPath)
  console.log('Opening...')

  exec(`code ${curDayPath}`)
}
