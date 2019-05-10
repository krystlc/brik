<template>
  <main>
    <section
      class="hero is-dark is-medium"
      :style="cover ? `background-image: url('${cover}')` : ''"
    >
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
        <div class="columns">
          <div class="column">
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
