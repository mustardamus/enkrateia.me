<template>
  <form method="POST" :action="url" @submit.prevent="onSubmit">
    <input type="text" name="_gotcha" style="display:none" />

    <p class="control">
      <input
        type="text" name="email" placeholder="your@mail.com"
        :class="{ input: true, email: true, 'is-danger': !isValidEmail }"
        v-model="email"
        :disabled="isLoading"
      />
    </p>
    <p class="control">
      <textarea
        name="message" placeholder="Your Message"
        :class="{ textarea: true, 'is-danger': !isValidMessage }"
        v-model="message"
        :disabled="isLoading"
      ></textarea>
    </p>
    <p class="control">
      <button
        type="submit" class="button is-fullwidth is-primary"
        :disabled="isLoading"
      >
        <template v-if="isLoading">Sending...</template>
        <template v-else>
          <template v-if="!isSent && !hasError">
            Send It
          </template>

          <template v-else-if="isSent && !hasError">
            Thanks for your message!
          </template>

          <template v-else-if="isSent && hasError">
            Oops, sorry, sending failed
          </template>
        </template>
      </button>
    </p>
  </form>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  props: {
    url: String
  },

  data () {
    return {
      email: '',
      message: '',
      isValidEmail: true,
      isValidMessage: true,
      isLoading: false,
      isSent: false,
      hasError: false
    }
  },

  mounted () {
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
      } else {
        Vue.nextTick(() => {
          this.$el.querySelectorAll('.is-danger')[0].focus()
        })
      }
    },

    validateEmail (email) {
      // xxeslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    sendMessage () {
      this.isLoading = true

      axios.post(this.url, {
        email: this.email,
        message: this.message
      }).then(() => {
        this.isLoading = false
        this.isSent = true
        this.hasError = false
        this.message = ''
        this.$el.querySelector('textarea').focus()
      }).catch(() => {
        this.isLoading = false
        this.isSent = false
        this.hasError = true
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

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
</style>
