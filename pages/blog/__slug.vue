<template>
  <div>
    <div v-if="!isLoading">
      <pre>{{ currentPost.fields }}</pre>
    </div>
    <div v-else>
      <span>loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPost() {
      return this.$store.state.entry.currentEntry
    },
    isLoading() {
      return this.$store.state.entry.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'blogPost',
      slug: params._slug
    })
  },
  head() {
    return {
      title: `${this.currentPost.fields.title} - Brik Labs`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.currentPost.fields.shortDescription
        }
      ]
    }
  }
}
</script>
