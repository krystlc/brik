<template>
  <div>
    <div v-if="!isLoading">
      <pre>{{ currentPrototype.fields }}</pre>
    </div>
    <div v-else>
      <span>loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPrototype() {
      return this.$store.state.entry.currentEntry
    },
    isLoading() {
      return this.$store.state.entry.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', 'prototype', params.slug)
  }
}
</script>
