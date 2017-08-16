<template>
  <div class="container is-fluid">
    <div class="columns">
      <div class="column is-2 is-hidden-mobile navigation">
        <div v-for="country in pictures" :key="country.country">
          <h2 class="title is-5">{{country.country}}</h2>

          <div v-for="city in country.cities" :key="city.city">
            <a :href="'#' + city.city">{{city.city}}</a>
          </div>
        </div>
      </div>

      <div class="column pictures">
        <div>
          <div v-for="country in pictures" :key="country.country">
            <div
              class="city" :id="city.city"
              v-for="city in country.cities" :key="city.city"
            >
              <city-gallery
                :country="country.country"
                :city="city.city"
                :pictures="city.pictures"
                :cover="covers[city.city]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CityGallery from '~/components/CityGallery'

export default {
  head () {
    return {
      title: 'Traveling Pictures',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pictures of my traveling through Europe as a digital nomad.'
        }
      ]
    }
  },

  components: { CityGallery },

  computed: {
    pictures () {
      return this.$store.state.travel.pictures
    },

    covers () {
      return this.$store.state.travel.covers
    }
  },

  fetch ({ store }) {
    return store.dispatch('travel/loadPictures')
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'
@import '~bulma/sass/utilities/mixins'

.navigation
  margin: 30px 0 0 10px

  .title
    color: white
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)
    margin: 20px 0 6px
    font-family: $font2

  a
    font-family: $font1

.pictures
  .city
    padding: 30px 10px 60px 10px

+touch
  .pictures
    .city
      .header
        a.showall
          padding: 0
</style>
