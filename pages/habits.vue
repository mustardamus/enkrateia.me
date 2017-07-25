<template>
  <div>
    <div v-for="habit in habits" :key="habit.id">
      <h1 class="title is-1">{{habit.title}}</h1>

      <month-calendar :days="habit.days"></month-calendar>
    </div>

  </div>
</template>

<script>
import MonthCalendar from '~components/MonthCalendar'

export default {
  components: { MonthCalendar },
  data () {
    return {
      days: [
        { day: 1, active: true },
        { day: 2, active: true },
        { day: 3, active: true },
        { day: 4, active: true },
        { day: 5, active: true },
        { day: 6 },
        { day: 7, active: true },
        { day: 8, active: true },
        { day: 9 },
        { day: 10, active: true },
        { day: 11 },
        { day: 12, active: true },
        { day: 13, active: true },
        { day: 14, active: true },
        { day: 15, active: true }
      ]
    }
  },

  computed: {
    habits () {
      return this.$store.state.habits.index
    }
  },

  fetch ({ store }) {
    return store.dispatch('habits/loadIndex')
  }
}
</script>
