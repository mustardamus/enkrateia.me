<template>
  <div>
    <div class="week" v-for="week in weeks" :key="week">
      <div class="columns is-mobile">
        <div class="column" v-for="day of week" :key="day.day">
          <div :class="{ day: true, done: day.done, bonus: day.bonus }">
            <span class="day-num">{{day.day}}</span>
            <bonus-icon v-if="day.bonus" />
          </div>
        </div>

        <div class="column filler" v-for="f in (7 - week.length)" :key="f" />
      </div>
    </div>
  </div>
</template>

<script>
import BonusIcon from '~components/icons/si-glyph-askterisk'

export default {
  components: { BonusIcon },

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
@import '~assets/sass/variables'

.week
  .day
    text-align: center
    border: 2px solid $background3
    border-radius: 2px
    color: white
    cursor: default
    font-family: $font2
    font-size: 0.96em
    position: relative
    padding: 2px 0

    &.done
      background: $color1
      border: none
      color: #222
      font-weight: bold
      box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2)

    &.bonus
      svg
        width: 20px
        height: 20px
        display: block
        position: absolute
        top: -10px
        right: -10px
        background: $background1
        border-radius: 100%
        fill: $color2
        padding: 4px
        box-shadow: -3px 3px 0 rgba(0, 0, 0, 0.2)
</style>
