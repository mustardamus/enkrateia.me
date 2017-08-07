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
              type="text" name="email" placeholder="your@mail.com"
              :class="{ input: true, email: true, 'is-danger': !isValidEmail }"
              v-model="email"
            />
          </p>
          <p class="control">
            <textarea
              name="message" placeholder="Your Message"
              :class="{ textarea: true, 'is-danger': !isValidMessage }"
              v-model="message"
            ></textarea>
          </p>
          <p class="control">
            <button
              type="submit" class="button is-fullwidth is-primary"
              :disabled="isLoading"
            >
              <template v-if="!isLoading">Send it!</template>
              <template v-else>Sending...</template>
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
import axios from 'axios'

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
      isValidMessage: true,
      isLoading: false
    }
  },

  mounted () {
    document.getElementById('layout').scrollIntoView(true)
    this.$el.querySelector('.email').focus()
  },

  methods: {
    onSubmit () {
      if (this.email.length === false || !this.validateEmail(this.email)) {
        this.isValidEmail = false
      } else {
        this.isValidEmail = true
      }

      if (this.message.length === 0) {
        this.isValidMessage = false
      } else {
        this.isValidMessage = true
      }

      if (this.isValidEmail && this.isValidMessage) {
        this.sendMessage()
      }
    },

    validateEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    sendMessage () {
      this.isLoading = true

      axios.post('https://formspree.io/me@enkrateia.me', {
        email: this.email,
        message: this.message
      }).then(() => {
        this.isLoading = false
      }).catch(() => {
        this.isLoading = false
      })
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

      &.is-danger
        border: 3px solid #FA2A00 !important

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
