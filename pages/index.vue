<template>
  <main class="hero-body">
    <section id="hero" class="container">
      <div class="columns is-desktop">
        <div class="column is-one-third">
          <hgroup>
            <h1 class="title">{{ entry.fields.shortDescription }}</h1>
            <h2 class="subtitle">
              {{ entry.fields.copy.content[0].content[0].value }}
            </h2>
            <button>Learn more</button>
            <button>another thing</button>
          </hgroup>
        </div>
      </div>
    </section>
  </main>
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
