<template>
  <main>
    <section class="hero is-dark is-medium has-hero-background">
      <div
        class="hero-background is-overlay"
        :style="`background-image: url('${cover}?w=1280')`"
      ></div>
      <div class="hero-body">
        <div class="container">
          <hgroup>
            <h1 class="title is-1">{{ title }}</h1>
            <h2 class="subtitle">{{ description }}</h2>
          </hgroup>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="content" v-html="copy"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  asyncData({ params }) {
    const entry = require('~/static/data/prototype.json').find(
      e => e.fields.slug === params.slug
    )
    return { entry }
  }
}
</script>
