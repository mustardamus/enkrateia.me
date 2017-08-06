<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <h1 class="title is-2">{{post.meta.title}}</h1>
      </div>
      <div class="column">
        <post-meta class="meta" :post="post" />
      </div>
    </div>

    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
import PostMeta from '~components/PostMeta'

export default {
  components: { PostMeta },

  data () {
    return {
      notFound: false
    }
  },

  computed: {
    post () {
      return this.$store.state.posts.post
    }
  },

  asyncData ({ store, params, error }) {
    return store.dispatch('posts/loadBySlug', params.slug)
      .catch(() => error({ statusCode: 404, message: 'Post not found' }))
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

h1.title
  font-family: $font1
  color: $color1
  padding: 30px 30px 20px 30px
  margin-top: 30px

.content
  color: white
  font-family: $font1
  font-size: 1.12em
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)
  padding: 30px
  max-width: 800px

.meta
  margin: 60px 30px 0 30px
</style>
