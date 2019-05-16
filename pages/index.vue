<template>
  <main id="hero" class="hero-body is-overlay">
    <div
      class="hero-background is-overlay"
      :style="`background-image: url('${this.cover}?w=1280&fl=progressive')`"
    ></div>
    <section class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
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
  }
}
</script>
