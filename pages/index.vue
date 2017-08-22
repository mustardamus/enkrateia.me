<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 intro">
        <h1 class="title is-1">Welcome Stranger!</h1>

        <p>
          You've just arrived at the digital shelter of Sebastian Senf. Call me
          Basti. Enjoy yourself!
        </p>

        <img class="image" src="/travel-pictures/Bulgaria/Sofia/100_1107.JPG" />
      </div>

      <div class="column">
        <ul>
          <li>
            <nuxt-link to="/posts">
              <icon-posts />
              <p>
                In <span>Posts</span> you can find travel reports, some
                tutorials, projects I am working on, experiments I am conducting
                and other thoughts.
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/travel">
              <icon-traveling />
              <p>
                In the <span>Traveling</span> section you will find a lot of
                random pitcures I took while traveling through Europe as a
                digital nomad for the past 4 years.
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/skills">
              <icon-skills />
              <p>
                The <span>Skills</span> page gives you an overview about the
                traits I developed over the years while working as a
                professional web-developer.
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/habits">
              <icon-habits />
              <p>
                The <span>Habits</span> page is where I publicly log the habits
                I wish to establish. More eyes equals less failure - at least
                that is the plan.
              </p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">
              <icon-contact />
              <p>
                In <span>Contact</span> you will find a handy form that you can
                fill out to holla at me for fun and business. Also a list of
                other places where you can find me on the web.
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="columns about">
      <div class="column is-8">
        <h2 class="title is-2">About me</h2>

        <p>
          As you have guessed correctly, the picture above shows me. There I am
          a couple kilometers outside of Sofia, after a night of raving, in the
          Bulgarian woods. One of many great nights to remember from my
          traveling.
        </p>
        <p>
          In mid-2013 I finally followed my calling to travel a bit and see the
          world. I quit my apartment and sold most of my stuff, so my possessions
          could fit in a bigger and a smaller backpack. Ever since I am living a
          minimalistic life.
        </p>
        <p>
          I was doing web-developing as a freelancer for 4 years already, so
          nothing really changed too much job-wise. I have to admit it's a
          rollercoaster, still to this day. But I would not do anything else.
        </p>
        <p>
          I started coding when I got my very first PC back in 2001. It was
          huge, gray, ugly and slow. I never was into gaming, so tinkering
          around with it was a natural thing to do. Basically what I still do,
          but on another level and for the web.
        </p>
        <p>
          Around the same time I started to ride BMX, which became also a huge
          part of my youth. It was a real nice balance to all the computer and
          technical stuff. Over these 10 years I learned to
          love freedom. Being out in the streets everyday, with a close
          circle of friends. In retrospect I am very happy to have stuck with
          such a hobby.
        </p>
        <p>
          But life goes on, as they say. When I started traveling I rode BMX
          less and less. So I found myself a new expression of freedom, which is
          Music. Drum and Bass espacially. I partied all over Europe, and met so
          many great people. Just like BMX, there is no 'right' way to do it.
          You just express yourself how you see fit. For over a year now I also
          do some DnB DJ'ing myself, and love it.
        </p>
        <p>
          Another predisposition that stayed with me ever since I was a child is
          doodling, drawing, and making art in general. If there is a pen and a
          paper, you can be sure that I do a quick doodle. From time to time I
          paint some canvas', but most of the time I love the process of making
          lines. It's almost a meditation.
        </p>
        <p>
          I could go on much longer. But I believe you get the gist. I like to
          express myself in various ways. I love the arts. I love the life and
          the freedom. I like to do the unconventional things.
        </p>
      </div>

      <div class="column">
        <img class="image" src="~assets/images/home-bmx-action.jpg" />
        <img class="image" src="~assets/images/rsz_home-dj-action.jpg" />
        <img class="image" src="~assets/images/rsz_home-mal-action.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import IconAbout from '~/components/icons/si-glyph-badge-name'
import IconPosts from '~/components/icons/si-glyph-document-copy'
import IconHabits from '~/components/icons/si-glyph-tag-one-plus'
import IconTraveling from '~/components/icons/si-glyph-global'
import IconContact from '~/components/icons/si-glyph-bubble-message-hi'
import IconSkills from '~/components/icons/si-glyph-multifunction-knife'

export default {
  head () {
    return {
      title: 'Hello!',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
            Digital playground of Sebastian Senf. Full-stack JavaScript
            web-developer. Articles and tutorials. Traveling pictures. Projects.
            Habbits-logging and many more. Hi!
          `
        }
      ]
    }
  },

  components: {
    IconAbout,
    IconPosts,
    IconHabits,
    IconTraveling,
    IconContact,
    IconSkills
  },

  mounted () {

  }
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/variables'

.container
  padding: 50px 30px

.intro
  .title
    font-family: $font1
    color: $color1

  p
    font-family: $font2
    font-size: 1.2em
    color: white
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.6)
    margin-bottom: 30px

ul
  border-top: 1px solid $background1
  padding-top: 14px
  margin-top: 30px

  li
    padding-bottom: 14px
    margin-bottom: 14px
    border-bottom: 1px solid $background1

    a
      display: block
      position: relative

      svg
        position: absolute
        top: 10px
        left: 0
        fill: $color1
        width: 30px
        height: 30px

      p
        padding-left: 44px
        font-family: $font1
        color: white

        span
          font-family: $font2
          color: $color2

      &:hover
        text-decoration: none

        svg
          fill: $color2

        p
          color: $color2

          span
            color: $color1

.about
  margin-top: 50px

  .title
    font-family: $font2
    color: $color2

  p
    color: white
    margin-bottom: 20px
    font-family: $font1

.image
  border-radius: 3px
  padding: 10px
  background: $background3
</style>
