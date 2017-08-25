const fs = require('fs')
const path = require('path')
const marked = require('marked')

global.Date.prototype.monthDays = function () {
  const d = new Date(this.getFullYear(), this.getMonth() + 1, 0)
  return d.getDate()
}

const zeroPadNum = num => {
  if (num < 10) {
    return `0${num}`
  } else {
    return num.toString()
  }
}

const getCurrentMonthDir = () => {
  const habitsDir = path.join(__dirname, '../assets/habits')
  const curDate = new Date()
  const curYear = curDate.getFullYear().toString()
  const curMonth = zeroPadNum(curDate.getMonth() + 1)

  return path.join(habitsDir, curYear, curMonth)
}

const getHabitDays = (habitId, min, bonus) => {
  let ret = []
  const dir = getCurrentMonthDir()
  const days = new Date().monthDays()

  for (let day = 1; day <= days; day++) {
    const filePath = path.join(dir, `${zeroPadNum(day)}.json`)
    let done = false
    let gotBonus = false

    if (fs.existsSync(filePath)) {
      const dayObj = require(filePath)
      const val = dayObj[habitId]

      if (val && val >= min) {
        done = true
      }

      if (val && val >= bonus) {
        gotBonus = true
      }
    }

    ret.push({ day, done, bonus: gotBonus })
  }

  return ret
}

module.exports = {
  'GET /' (req, res) {
    const habitsIndex = require(path.join(__dirname, '../assets/habits'))
    const habits = habitsIndex.map(habit => {
      const days = getHabitDays(habit.id, habit.min, habit.bonus)
      habit.why = marked(habit.why)
      habit.how = marked(habit.how)

      return Object.assign(habit, { days })
    })

    res.json(habits)
  }
}
