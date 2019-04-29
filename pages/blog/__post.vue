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
      return this.$store.state.post.currentPost
    },
    isLoading() {
      return this.$store.state.post.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('post/getPostBySlug', params.slug)
  }
}
</script>
