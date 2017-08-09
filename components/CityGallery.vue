<template>
  <div>
    <div class="header">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title is-1">
            {{city}}
            <span>{{country}}</span>
          </h1>
        </div>
        <div class="column">
          <a class="showall" v-if="!isGalleryShown" @click="showGallery">
            Show all {{pictures.length}} pictures
          </a>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="cover" v-if="!isGalleryShown">
        <img class="image" :src="pictureUrl(this.cover)" @click="showGallery" />
      </div>

      <div class="gallery" v-if="isGalleryShown">
        <div class="columns is-multiline">
          <div class="column is-4" v-for="picture in pictures" :key="picture">
            <a @click.prevent="onThumbClick(picture)" :href="pictureUrl(picture)">
              <img class="image" :src="thumbUrl(picture)" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div :class="{ modal: true, 'is-active': isModalShown }" @click="closeModal">
      <div class="modal-background"></div>

      <div class="modal-content">
        <img class="image" :src="modalPicture">
      </div>

      <button class="modal-close is-large"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: String,
    city: String,
    pictures: Array,
    cover: String
  },

  data () {
    return {
      isGalleryShown: false,
      isModalShown: false,
      modalPicture: false
    }
  },

  methods: {
    pictureUrl (picture) {
      return `/travel-pictures/${this.country}/${this.city}/${picture}`
    },

    thumbUrl (picture) {
      return this.pictureUrl(picture).replace('.JPG', '_thumb.JPG')
    },

    showGallery () {
      this.isGalleryShown = true
    },

    onThumbClick (picture) {
      this.modalPicture = this.pictureUrl(picture)
      this.isModalShown = true
    },

    closeModal () {
      this.isModalShown = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'
@import '~bulma/sass/utilities/mixins'

.header
  cursor: default

  .title
    font-family: $font1
    color: $color2
    margin: 0 0 20px 0

    span
      font-family: $font2
      color: white
      font-size: 0.6em

  .showall
    padding-top: 24px
    display: block
    text-align: right
    font-family: $font2

.wrapper
  padding: 20px 20px 16px 20px
  background: $background3
  border-radius: 5px

.cover
  .image
    border-radius: 5px
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
    cursor: pointer

.gallery
  a
    img
      border: 3px solid $background2
      border-radius: 3px
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)

    &:hover
      img
        border: 3px solid $color1

.modal
  .modal-content
    width: 1024px

+mobile
  .header
    .title
      text-align: center
      margin: 0

    .showall
      padding: 0 0 10px 0
      display: block
      text-align: center

  .gallery
    text-align: center

    a
      margin: 0 auto
</style>
