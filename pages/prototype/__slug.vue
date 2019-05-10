<template>
  <div>
    <div>
      <pre>{{ entry.fields }}</pre>
    </div>
  </div>
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
          content_type: 'prototype'
        })
        return { entry: entry.items[0] }
      }
    }
  }
}
</script>
