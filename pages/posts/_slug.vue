<template>
  <div id="post" class="container">
    <div class="columns">
      <div class="column is-8">
        <h1 class="title is-2">{{post.meta.title}}</h1>
      </div>
      <div class="column">
        <post-meta class="meta" :post="post" />
      </div>
    </div>

    <div class="content" v-html="post.html"></div>

    <div id="comments">
      <template v-if="showComments">
        <vue-disqus
          shortname="enkrateia"
          :identifier="post.meta.slug"
          :url="'https://enkrateia.me/posts/' + post.meta.slug"
          :title="post.meta.title"
        />
      </template>
      <template v-else>
        <a @click="onShowCommentsClick">
          Show
          <span class="disqus-comment-count" :data-disqus-identifier="post.meta.slug">
            No Comments
          </span>
          / Leave a Comment
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import VueDisqus from '~/node_modules/vue-disqus/VueDisqus'

export default {
  head () {
    return {
      title: this.post.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt }
      ]
    }
  },

  components: { PostMeta, VueDisqus },

  data () {
    return {
      notFound: false,
      showComments: false
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

    if (window.DISQUSWIDGETS) {
      window.DISQUSWIDGETS.getCount({ reset: true })
    }
  },

  methods: {
    onShowCommentsClick () {
      this.showComments = true
    }
  }
}
</script>

<style lang="sass">
@import '~assets/sass/variables'
@import '~bulma/sass/utilities/mixins'

#post
  h1.title
    font-family: $font1
    color: $color1
    padding: 30px 30px 20px 30px
    margin-top: 30px

  .content
    color: white
    font-family: $font1
    font-size: 1.12em
    padding: 30px

    p
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4)
      max-width: 800px

    h1, h2, h3, h4, h5, h6
      color: $color2
      font-family: $font2

    code
      font-family: $font3
      background: $background3
      border-radius: 2px
      color: white
      text-shadow: none
      font-size: 1em

    pre
      padding: 10px
      background: $background3
      border-radius: 3px
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
      margin: 40px 0

      code
        background: $background1
        font-size: 1em

    img
      border: 10px solid $background3
      border-radius: 3px
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)

    strong
      color: white

  .meta
    margin: 60px 30px 0 30px

+mobile
  #post
    .meta
      margin: 0 20px 0 0

    h1.title
      text-align: center

    .content
      padding-top: 60px

#comments
  margin: 30px
  padding-top: 30px
  border-top: 1px solid $background1

  a
    display: block
    text-align: center
    font-family: $font2
    font-size: 1.4em
</style>
