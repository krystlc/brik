<template>
  <main class="hero-body">
    <section id="hero" class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
          <hgroup>
            <h1 class="title is-size-2">{{ entry.fields.shortDescription }}</h1>
            <h2 class="subtitle">
              {{ entry.fields.copy.content[0].content[0].value.substr(0, 120) }}
            </h2>
            <hr />
            <button class="button is-rounded is-primary">Our Prototypes</button>
            <button class="button is-rounded is-info">Our Mission</button>
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
