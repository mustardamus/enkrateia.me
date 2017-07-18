<template>
  <div>
    <div v-for="post in posts" :key="post.meta.slug">
      <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.meta.slug }}">
        {{post.meta.title}}
      </nuxt-link>

      <blockquote v-html="post.excerpt"></blockquote>
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
  }
}
</script>
