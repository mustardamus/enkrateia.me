<template>
  <ul>
    <li><icon-date /> {{post.meta.dateFormatted}}</li>
  </ul>
</template>

<script>
import IconDate from '~components/icons/si-glyph-calendar-empty'

export default {
  components: { IconDate },
  props: { post: Object }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

li
  font-family: $font2
  font-size: 1.1em
  position: relative
  padding-left: 28px
  color: $color2
  float: right

  svg
    witdh: 20px
    height: 20px
    fill: $color1
    position: absolute
    top: 2px
    left: 0
</style>
