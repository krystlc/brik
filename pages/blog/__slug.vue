<template>
  <div>
    <div v-if="!isLoading">
      <pre>{{ entry.fields }}</pre>
    </div>
    <div v-else>
      <span>loading...</span>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'blogPost',
      slug: params._slug
    })
  }
}
</script>
