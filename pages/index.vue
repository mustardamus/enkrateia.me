<template>
  <div class="container">
    <!--<div class="columns is-multiline">
      <div class="column is-5">
        <div class="image mal">
          <img src="~assets/images/home-mal-action.jpg" />
        </div>
      </div>
      <div class="column is-7">
        Hier so nen kurzer intro text und so
      </div>

      <div class="column is-7">
        und hier so nen kleiner overview über die seite
      </div>
      <div class="column is-5">
        <div class="image dj">
          <img src="~assets/images/home-dj-action.jpg" />
        </div>
      </div>

    </div>-->

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Hello!',
      meta: [
        { hid: 'description', name: 'description', content: 'XXX tbd' }
      ]
    }
  },

  mounted () {
    window.location.href = '/travel'
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.container
  padding: 50px 0

.image
  border-radius: 3px
  padding: 10px
  background: $background3
  transform: rotate(2deg)
  margin: 20px

  img
    line-height: auto
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)
    border-radius: 3px

  &.dj
    transform: rotate(-2deg)
</style>
