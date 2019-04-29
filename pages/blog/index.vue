<template>
  <v-layout>
    <v-flex>
      <h1>Blog</h1>
      <ul>
        <li v-for="(post, i) in posts" :key="i">
          <nuxt-link :to="`/blog/${post.fields.slug}`">
            {{ post.fields.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  },
  head() {
    return {
      title: 'Blog - Brik Labs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Read the latest Brik Labs news, prototype milestones, helpful agriculture technology articles and more.'
        }
      ]
    }
  }
}
</script>
