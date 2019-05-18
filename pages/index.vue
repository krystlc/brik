<template>
  <main id="hero" class="hero-body">
    <section class="container">
      <div class="columns">
        <div class="column is-one-third-desktop">
          <hgroup>
            <h1 class="title is-1 has-text-weight-light">
              {{ description }}
            </h1>
            <h2 class="subtitle" v-html="copy"></h2>
            <div class="field is-grouped">
              <p class="control">
                <nuxt-link
                  to="/prototypes"
                  class="button is-outlined is-primary"
                >
                  Prototypes
                </nuxt-link>
              </p>
              <p class="control">
                <nuxt-link to="/mission" class="button is-outlined is-light">
                  Mission
                </nuxt-link>
              </p>
            </div>
          </hgroup>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import entryMixin from '@/mixins/entryMixin'

export default {
  layout: 'dark',
  mixins: [entryMixin],
  asyncData() {
    const entry = require('~/static/data/page.json').find(
      e => e.fields.slug === 'home'
    )
    return { entry }
  },
  mounted() {
    document.body.style = `background-image: url('${
      this.cover
    }?w=1280&fl=progressive')`
  },
  beforeDestroy() {
    document.body.style = ''
  }
}
</script>

<style lang="scss">
body {
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
}
.hero.is-fullheight.is-dark {
  background-color: transparent;
}
</style>
