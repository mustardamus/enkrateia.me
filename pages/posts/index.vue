<template>
  <div class="container">
    <div v-for="post in posts" :key="post.meta.slug">
      <div
        class="post" @click="onPostClick(post)"
        v-if="is2014Shown || post.meta.year !== 2014"
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

    <h2 class="title is-4 more" v-if="!is2014Shown">
      <a @click="show2014">
        Show all 24 Posts from 2014...
      </a>
    </h2>
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

  data () {
    return {
      is2014Shown: false
    }
  },

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
    },

    show2014 () {
      this.is2014Shown = true
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

.more
  font-family: $font2
  padding: 30px 30px 60px 30px

  a
    display: block
    border-top: 1px solid $background1
    padding-top: 20px
</style>
