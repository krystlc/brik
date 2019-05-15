<template>
  <main class="hero-body">
    <section class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">{{ title }}</h1>
          <div v-html="copy"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import entryMixin from '@/mixins/entryMixin'

export default {
  mixins: [entryMixin],
  asyncData({ params }) {
    const entry = require('~/static/data/page.json').find(
      e => e.fields.slug === params.slug
    )
    return { entry }
  }
}
</script>
