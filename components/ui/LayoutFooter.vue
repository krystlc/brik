<template>
  <div class="container">
    <div v-if="!mini" class="columns">
      <div class="column">
        <sitemap />
      </div>
      <div class="column">
        <call-to-action />
      </div>
    </div>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="control has-text-grey-light" v-html="legal"></p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a
            v-for="(social, i) in socials"
            :key="i"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="icon is-medium"
          >
            <i :class="`fab fa-${social.icon}`" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sitemap from '@/components/Sitemap'
import CallToAction from '@/components/CallToAction'

export default {
  components: { Sitemap, CallToAction },
  props: {
    mini: Boolean
  },
  computed: {
    legal() {
      return this.$store.state.app.legal
    },
    socials() {
      return this.$store.state.app.socials
    }
  }
}
</script>
