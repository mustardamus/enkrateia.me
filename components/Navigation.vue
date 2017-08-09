<template>
  <nav :class="{ 'is-shown': isShown }">
    <ul>
      <li>
        <nuxt-link to="/" title="About">
          <icon-about /> <span>About</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts" title="Posts">
          <icon-posts /> <span>Posts</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/travel" title="Traveling">
          <icon-traveling /> <span>Traveling</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/habits" title="Habits">
          <icon-habits /> <span>Habits</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" title="Contact">
          <icon-contact /> <span>Contact</span>
        </nuxt-link>
      </li>
    </ul>

    <a class="delete is-large" @click="toggleShown">

    </a>
    <a class="burger" @click="toggleShown">
      <icon-burger />
    </a>
  </nav>
</template>

<script>
import IconAbout from '~components/icons/si-glyph-badge-name'
import IconPosts from '~components/icons/si-glyph-document-copy'
import IconHabits from '~components/icons/si-glyph-tag-one-plus'
import IconTraveling from '~components/icons/si-glyph-global'
import IconContact from '~components/icons/si-glyph-bubble-message-hi'
import IconBurger from '~components/icons/si-glyph-two-arrow-down'

export default {
  components: {
    IconAbout,
    IconPosts,
    IconHabits,
    IconTraveling,
    IconContact,
    IconBurger
  },

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
      },

      isShown: false
    }
  },

  mounted () {
    if (process.BROWSER_BUILD) {
      this.initTooltips()
    }

    this.$router.afterEach(() => {
      this.isShown = false
    })
  },

  methods: {
    initTooltips () {
      const tippy = require('tippy.js')

      this.$el.querySelectorAll('a').forEach(aEl => {
        tippy(aEl, this.tippyOptions)
      })
    },

    toggleShown () {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'
@import '~bulma/sass/utilities/mixins'

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

  .delete
    display: none

  .burger
    display: none

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

      span
        display: none

.nuxt-link-exact-active
  svg
    fill: $color1

+touch
  nav
    width: 100%
    height: 50px
    z-index: 99999
    border: none
    border-right: none
    border-bottom: 1px solid $background3

    ul
      display: none
      margin-top: 30px

      li
        padding: 20px 0

        a
          display: block
          width: 100%
          position: relative
          padding-left: 50px

          &.nuxt-link-exact-active
            padding-left: 80px

          svg
            margin: 0
            display: inline-block

          span
            display: block
            font-family: $font2
            font-size: 1.6em
            display: inline-block
            position: absolute
            top: -3px
            padding-left: 10px

    .delete
      background: $color2
      position: absolute
      top: 50px
      right: 50px
      display: none

      &:before, &:after
        background-color: $background1

    .burger
      display: block
      width: 100%
      height: 100%
      text-align: center

      svg
        fill: $color2
        width: 30px
        height: 30px
        margin-top: 10px

    &.is-shown
      height: 100%

      ul
        display: inline-block

      .delete
        display: inline-block

      .burger
        display: none

</style>
