<template>
  <ul>
    <li>
      <span>{{post.meta.dateFormatted}}</span>
      <icon-date />
    </li>
    <li>
      <span class="disqus-comment-count" :data-disqus-identifier="post.meta.slug">
        No Comments
      </span>
      <icon-comments />
    </li>
  </ul>
</template>

<script>
import IconDate from '~/components/icons/si-glyph-calendar-empty'
import IconComments from '~/components/icons/si-glyph-bubble-message-talk'

export default {
  components: { IconDate, IconComments },
  props: { post: Object }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

ul
  float: right
  padding-right: 20px

  li
    font-family: $font2
    font-size: 1.1em
    color: $color2
    position: relative
    text-align: right

    span
      display: inline-block
      padding-right: 10px

    svg
      width: 20px
      height: 20px
      fill: $color1
      display: inline-block
      position: absolute
      top: 3px
</style>
