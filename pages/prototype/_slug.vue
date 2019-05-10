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
  asyncData({ params }) {
    const entry = require('~/static/data/prototype.json')
    return { entry: entry.find(e => e.fields.slug === params.slug) }
  }
}
</script>
