<template>
  <div id="layout">
    <navigation />

    <div id="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'

export default {
  components: { Navigation }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'
@import '~bulma/sass/utilities/mixins'

#content
  padding-left: 51px

+touch
  #content
    padding: 50px 0 0 0
</style>
