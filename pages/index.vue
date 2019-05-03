<template>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex d-flex xs12 sm8>
          <hgroup>
            <h1 class="display-2">{{ entry.fields.shortDescription }}</h1>
            <p>{{ entry.fields.copy.content[0].content[0].value }}</p>
            <v-btn round large>Get started ></v-btn>
          </hgroup>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  layout: 'landing',
  mixins: [mixin],
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'page',
      slug: 'home'
    })
    await store.dispatch('posts/getPosts', params.slug)
  },
  head() {
    return {
      title: 'Brik Labs'
    }
  }
}
</script>
