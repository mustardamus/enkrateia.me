<template>
  <div class="container">
    <div class="habit" v-for="habit in habits" :key="habit.id">
      <h2 class="title is-2 has-text-centered">{{habit.title}}</h2>

      <div class="columns is-multiline">
        <div class="column is-6">
          <h3 class="title is-4">Why?</h3>
          <div class="content" v-html="habit.why"></div>
        </div>

        <div class="column is-6">
          <h3 class="title is-4">How?</h3>
          <div class="content" v-html="habit.how"></div>
        </div>

        <div class="column is-4">
          <div class="meta">
            <h3 class="title is-4">{{currentMonth}}</h3>

            <template v-if="habit.id === 'no-weed'">
              <ul>
                <li>
                  <i class="minimal-icon" />
                  Minimal: <span>Don't do it</span>
                </li>
                <li>
                  <bonus-icon class="bonus-icon" />
                  Bonus: <span>No drugs at all</span>
                </li>
              </ul>
            </template>
            <template v-else-if="habit.id === 'no-porn'">
              <ul>
                <li>
                  <i class="minimal-icon" />
                  Minimal: <span>Don't watch it</span>
                </li>
                <li>
                  <bonus-icon class="bonus-icon" />
                  Bonus: <span>No masturbation</span>
                </li>
              </ul>
            </template>
            <template v-else>
              <ul>
                <li>
                  <i class="minimal-icon" />
                  Minimal: <span>{{habit.min}} {{habit.unit}}</span>
                </li>
                <li>
                  <bonus-icon class="bonus-icon" />
                  Bonus: <span>{{habit.bonus}} {{habit.unit}}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>

        <div class="column is-8">
          <div class="calendar">
            <month-calendar :days="habit.days"></month-calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthCalendar from '~components/MonthCalendar'
import BonusIcon from '~components/icons/si-glyph-askterisk'

export default {
  head () {
    return {
      title: 'Habbits Logging',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Public habbit-logging. What I do everyday and why.'
        }
      ]
    }
  },

  components: { MonthCalendar, BonusIcon },

  computed: {
    habits () {
      return this.$store.state.habits.index
    },

    currentMonth () {
      const date = new Date()
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]

      return `${months[date.getMonth()]} ${date.getFullYear()}`
    }
  },

  fetch ({ store }) {
    return store.dispatch('habits/loadIndex')
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.habit
  padding: 30px
  margin-bottom: 30px

  .title.is-2
    color: $color2
    font-family: $font1
    margin-bottom: 30px
    border-bottom: 1px solid $color1
    padding-bottom: 10px
    cursor: default

  .title.is-4
    color: white
    font-family: $font2

  .content
    font-family: $font1
    color: white
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2)

  .calendar
    margin-top: 36px

  .meta
    .title.is-4
      font-family: $font1
      color: $color2
      border-bottom: 1px solid $color1
      padding-bottom: 10px
      cursor: default

    ul
      li
        color: $color2
        font-family: $font2
        margin-bottom: 5px
        cursor: default

        span
          color: white

  .bonus-icon, .minimal-icon
    width: 20px
    height: 20px
    display: inline-block
    position: relative
    top: 4px
    background: $background1
    border-radius: 100%
    fill: $color2
    padding: 4px

  .minimal-icon
    background: $color1
</style>
