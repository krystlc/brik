<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>{{ entry.fields.title }}</h1>
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
      slug: 'mission'
    })
  }
}
</script>
