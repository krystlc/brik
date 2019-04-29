<template>
  <v-layout>
    <v-flex>
      <h1>{{ entry.fields.title }}</h1>
      <div>
        <pre>{{ entry.fields.copy.content }}</pre>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'page',
      slug: params._slug
    })
  }
}
</script>
