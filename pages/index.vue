<template>
  <main id="hero" class="hero-body">
    <div
      class="hero-background is-overlay"
      :style="`background-image: url('${cover}')`"
    ></div>
    <section class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
          <hgroup>
            <h1 class="title is-size-1 has-text-weight-light">
              {{ description }}
            </h1>
            <h2 class="subtitle" v-html="copy"></h2>
            <hr />
            <div class="field is-grouped">
              <p class="control">
                <nuxt-link
                  to="/prototypes"
                  class="button is-rounded is-primary"
                >
                  Prototypes
                </nuxt-link>
              </p>
              <p class="control">
                <nuxt-link to="/mission" class="button is-rounded is-info">
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
