<template>
  <div>
    <nuxt-link to="/posts">Posts Index</nuxt-link>

    <h1>{{post.meta.title}}</h1>
    <span>{{post.meta.date}}</span>

    <div v-html="post.html"></div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
