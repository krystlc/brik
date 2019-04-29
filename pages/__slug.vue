<template>
  <v-layout>
    <v-flex>
      <h1>{{ page.fields.title }}</h1>
      <div>
        <pre>{{ page.fields.copy.content }}</pre>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.entry.currentEntry
    },
    isLoading() {
      return this.$store.state.entry.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'page',
      slug: params._slug
    })
  },
  destroyed() {
    this.$store.dispatch('entry/clearCurrentEntry')
  },
  head() {
    return {
      title: `${this.page.fields.title} - Brik Labs`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.fields.shortDescription
        }
      ]
    }
  }
}
</script>
