<template>
  <div class="container">
    <div class="columns">
      <div class="column is-8">
        <h1 class="title is-2">{{post.meta.title}}</h1>
      </div>
      <div class="column">
        <ul class="meta">
          <li><icon-date /> {{post.meta.date}}</li>
        </ul>
      </div>
    </div>

    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
import IconDate from '~components/icons/si-glyph-calendar-empty'

export default {
  components: { IconDate },

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

.meta
  margin-top: 60px

  li
    color: white
    font-family: $font2
    font-size: 1.1em
    position: relative
    padding-left: 28px
    color: $color1

    svg
      witdh: 20px
      height: 20px
      fill: $color2
      position: absolute
      top: 2px
      left: 0
</style>
