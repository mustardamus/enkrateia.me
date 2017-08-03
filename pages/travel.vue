<template>
  <div class="container is-fluid">
    <div v-for="country in pictures" :key="country.country">
      <div v-for="city in country.cities" :key="city.city">
        {{country.country}}
        {{city.city}}

        <div class="columns is-mobile is-multiline">
          <div class="column is-4" v-for="picture in city.pictures" :key="picture">
            <a :href="pictureUrl(country.country, city.city, picture)">
              <img class="image" :src="thumbUrl(country.country, city.city, picture)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pictures () {
      return this.$store.state.travel.pictures
    }
  },

  fetch ({ store }) {
    return store.dispatch('travel/loadPictures')
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
  },

  methods: {
    pictureUrl (country, city, picture) {
      return `/travel-pictures/${country}/${city}/${picture}`
    },

    thumbUrl (country, city, picture) {
      return this.pictureUrl(country, city, picture).replace('.JPG', '_thumb.JPG')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

a
  img
    width: 100%
    padding: 5px
    background: $background3
    border-radius: 2px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)

  &:hover
    img
      background: $color1
</style>
