<template>
  <div class="container">
    <div
      class="post"
      v-for="post in posts" :key="post.meta.slug"
      @click="onPostClick(post)"
    >
      <h1 class="title is-2">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.meta.slug }}">
          {{post.meta.title}}
        </nuxt-link>
      </h1>

      <div class="columns">
        <div class="column is-9">
          <div class="excerpt" v-html="post.excerpt"></div>
        </div>

        <div class="column">
          <ul class="meta">
            <li><icon-date /> {{post.meta.dateFormatted}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconDate from '~components/icons/si-glyph-calendar-empty'

export default {
  components: { IconDate },

  computed: {
    posts () {
      return this.$store.state.posts.index
    }
  },

  fetch ({ store }) {
    return store.dispatch('posts/loadIndex')
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
  },

  methods: {
    onPostClick (post) {
      this.$router.push(`/posts/${post.meta.slug}`)
      console.log('p', post)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.post
  padding: 30px 30px 90px 30px

  .title
    font-family: $font1

    a
      display: block

  .excerpt
    color: rgba(255, 255, 255, 0.9)
    font-family: $font1
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)
    font-size: 1.12em

  .meta
    opacity: 0.5

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

  &:hover
    cursor: pointer

    .title
      a
        text-decoration: underline
        color: $color2

    .excerpt
      color: white

    .meta
      opacity: 1
</style>
