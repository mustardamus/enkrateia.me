<template>
  <div>
    <div class="week" v-for="week in weeks" :key="week">
      <div class="columns is-mobile">
        <div
          v-for="day of week" :key="day.day"
          :class="{ column: true, day: true, done: day.done, bonus: day.bonus }"
        >
          <div class="has-text-centered">
            {{day.day}}
          </div>
        </div>

        <div class="column filler" v-for="f in (7 - week.length)" :key="f"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    days: Array
  },

  computed: {
    weeks () {
      let weekIndex = 0
      let weeks = [[]]

      this.days.forEach((day, i) => {
        weeks[weekIndex].push(day)

        if ((i + 1) % 7 === 0) {
          weeks.push([])
          weekIndex++
        }
      })

      return weeks
    }
  }
}
</script>

<style lang="sass" scoped>
  .done
    color: red

  .bonus
    text-decoration: underline
</style>
