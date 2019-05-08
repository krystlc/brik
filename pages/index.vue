<template>
  <main class="hero-body">
    <section id="hero" class="container">
      <div class="columns is-desktop">
        <div class="column is-half">
          <hgroup>
            <h1 class="title is-size-1 has-text-weight-light">
              {{ entry.fields.shortDescription }}
            </h1>
            <h2 class="subtitle">
              {{ entry.fields.copy.content[0].content[0].value.substr(0, 120) }}
            </h2>
            <hr />
            <div class="field is-grouped">
              <p class="control">
                <nuxt-link to="/prototype" class="button is-rounded is-primary">
                  Our Prototypes
                </nuxt-link>
              </p>
              <p class="control">
                <nuxt-link to="/mission" class="button is-rounded is-info">
                  Our Mission
                </nuxt-link>
              </p>
            </div>
          </hgroup>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    console.log(store.state.entry)
    await store.dispatch('entry/getEntryBySlug', {
      type: 'page',
      slug: 'home'
    })
  },
  head() {
    return {
      title: 'Brik Labs'
    }
  }
}
</script>
