<template>
  <div class="container">
    <div class="columns">
      <div class="column is-7">
        <form
          action="https://formspree.io/me@enkrateia.me" method="POST"
          @submit.prevent="onSubmit"
        >
          <input type="text" name="_gotcha" style="display:none" />

          <p class="control">
            <input
              class="input email" type="text" name="email"
              placeholder="your@mail.com"
              v-model="email"
            />
          </p>
          <p class="control">
            <textarea
              class="textarea" name="message" placeholder="Your Message"
              v-model="message"
            ></textarea>
          </p>
          <p class="control">
            <button type="submit" class="button is-primary is-fullwidth">
              Send it!
            </button>
          </p>
        </form>
      </div>

      <div class="column">
        <ul class="link-list">
          <li>
            <a href="mailto:me@enkrateia.me">
              <icon-email />
              <span class="title">me@enkrateia.me</span>
              <span class="desc">
                The most effective way to reach me is via E-Mail. Everything
                except Spam and Recruiters: Say hello, feedback,
                job-offers, business-proposals and questions about web-development.
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/mustardamus">
              <icon-github />
              <span class="title">github.com/mustardamus</span>
              <span class="desc">
                You are very welcome to leave some feedback for my projects, create
                an issue if you found a bug or submitting a pull request.
              </span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mustardamus">
              <icon-twitter />
              <span class="title">twitter.com/mustardamus</span>
              <span class="desc">
                Public chit-chat goes here. I am not that active with posting as I
                used to be, but if you mention me or write a DM, you can be sure
                that I get back to you.
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconEmail from '~components/icons/Mail_w_x2F__circle'
import IconGithub from '~components/icons/Github_w_x2F__circle'
import IconTwitter from '~components/icons/Twitter_w_x2F__circle'

export default {
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid:
          'description',
          name: 'description',
          content: `
            How to contact me - E-Mail: me@enkrateia.me, Twitter & GitHub:
            @mustardamus
          `
        }
      ]
    }
  },

  components: { IconEmail, IconGithub, IconTwitter },

  data () {
    return {
      email: '',
      message: '',
      isValidEmail: true,
      isValidMessage: true
    }
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
    this.$el.querySelector('.email').focus()
  },

  methods: {
    onSubmit () {
      console.log('uhjaaa', this.email, this.message)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.container
  padding-top: 60px

form
  background: $background3
  border-radius: 3px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
  padding: 20px
  margin: 0 20px

  .control
    margin-bottom: 20px

    &:last-child
      margin-bottom: 0

    .button
      background: $color1
      color: #222
      font-family: $font2
      font-size: 1.4em

      &:hover
        background: $color2

    input[name="email"], textarea
      font-family: $font2
      font-size: 1.2em
      border: 3px solid $background2

      &:focus
        border: 3px solid $color2

    textarea
      font-family: $font1
      font-size: 1em
      min-height: 300px

.link-list
  margin: 0 20px

  li
    margin-bottom: 50px

    &:last-child
      margin: 0

    a
      position: relative

      .title
        font-family: $font2
        display: block
        padding: 0 0 8px 48px
        margin: 0
        color: $color2
        font-size: 1.4em

      .desc
        font-family: $font1
        display: block
        color: white
        font-size: 1em
        padding-left: 48px
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)

      svg
        position: absolute
        top: -5px
        left: 0
        width: 36px
        height: 36px
        fill: $color2

      &:hover
        text-decoration: none

        .title
          text-decoration: underline
          color: $color1

        svg
          fill: $color1
</style>
