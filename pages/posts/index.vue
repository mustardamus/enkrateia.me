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
          <div class="excerpt" v-html="post.excerptHtml"></div>
        </div>

        <div class="column">
          <post-meta class="meta" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from '~components/PostMeta'

export default {
  head () {
    return {
      title: 'Blog Posts',
      meta: [
        { hid: 'description', name: 'description', content: 'XXX tbd' }
      ]
    }
  },

  components: { PostMeta },

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
