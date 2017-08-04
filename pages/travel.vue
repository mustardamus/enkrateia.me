<template>
  <div class="container">
    <div v-for="country in pictures" :key="country.country">
      <div v-for="city in country.cities" :key="city.city">
        <h1 class="title">
          {{country.country}}
          {{city.city}}
        </h1>

        <img class="image"
          :src="pictureUrl(country.country, city.city, covers[city.city])"
          v-on:click="toggleCityPictures(city.city)"
        />

        <div class="columns is-mobile is-multiline" v-if="isCityOpen[city.city]">
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
  data () {
    return {
      isCityOpen: {
        // Vienna: true,
        // Berlin: false
      }
    }
  },

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

  created () {
    this.buildIsCityOpenIndex()
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
    },

    buildIsCityOpenIndex () {
      Object.keys(this.covers).forEach(city => {
        this.$set(this.isCityOpen, city, false)
      })
    },

    toggleCityPictures (city) {
      this.isCityOpen[city] = !this.isCityOpen[city]
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
