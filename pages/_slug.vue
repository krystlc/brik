<template>
  <main class="hero-body">
    <section id="hero" class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
          <h1>{{ entry.fields.title }}</h1>
          <div>
            <pre>{{ entry.fields.copy.content }}</pre>
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
    const entry = require('~/static/data/page.json')
    return { entry: entry.find(e => e.fields.slug === params.slug) }
  }
}
</script>
