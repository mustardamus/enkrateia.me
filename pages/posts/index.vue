<template>
  <div class="container">
    <div class="post" v-for="post in posts" :key="post.meta.slug">
      <h1 class="title is-2">
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.meta.slug }}">
          {{post.meta.title}}
        </nuxt-link>
      </h1>

      <div class="columns">
        <div class="column is-8">
          <div class="excerpt" v-html="post.excerpt"></div>
        </div>

        <div class="column">
          <div class="meta">
            meta
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.post
  padding: 30px 30px 60px 30px

  .title
    font-family: $font1

    a
      display: block
</style>
