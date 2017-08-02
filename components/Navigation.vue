<template>
  <nav>
    <ul>
      <!--<li>
        <nuxt-link to="/" title="About">
          <icon-about />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts" title="Posts">
          <icon-posts />
        </nuxt-link>
      </li>-->
      <li>
        <nuxt-link to="/habits" title="Habits">
          <icon-habits />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconAbout from '~components/icons/si-glyph-badge-name'
import IconPosts from '~components/icons/si-glyph-document-copy'
import IconHabits from '~components/icons/si-glyph-tag-one-plus'

export default {
  components: { IconAbout, IconPosts, IconHabits },

  data () {
    return {
      tippyOptions: {
        theme: 'navigation',
        position: 'right',
        animation: 'perspective',
        duration: 300,
        arrow: true,
        distance: 10,
        followCursor: false
      }
    }
  },

  mounted () {
    if (process.BROWSER_BUILD) {
      this.initTooltips()
    }
  },

  methods: {
    initTooltips () {
      const tippy = require('tippy.js')

      this.$el.querySelectorAll('a').forEach(aEl => {
        tippy(aEl, this.tippyOptions)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

nav
  display: table
  background: $background1
  width: 50px
  height: 100%
  position: fixed
  top: 0
  left: 0
  border-right: 1px solid $background3
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.9)
  font-family: $font2

ul
  display: table-cell
  vertical-align: middle

  li
    a
      display: block
      width: 50px
      height: 50px

      svg
        width: 30px
        height: 30px
        margin: 10px 0 0 10px
        fill: $color2

      &:hover
        svg
          fill: $color1

.nuxt-link-exact-active
  svg
    fill: $color1
</style>
