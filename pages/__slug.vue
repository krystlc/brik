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
  async asyncData({ app, params, error, payload }) {
    if (process.server) {
      if (payload) {
        return { entry: payload }
      } else {
        const entry = await app.$getContent({
          'fields.slug': params._slug,
          content_type: 'page'
        })
        return { entry: entry.items[0] }
      }
    }
  }
}
</script>
