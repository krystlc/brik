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
import entryMixin from '@/mixins/entryMixin'

export default {
  mixins: [entryMixin],
  async asyncData({ app, params, error, payload }) {
    console.log('ok, i will load only if i am in the server...')
    if (process.server) {
      console.log('getting content now...')
      const entry = await app.$getContent({
        'fields.slug': 'home',
        content_type: 'page'
      })
      return { entry: entry.items[0] }
    } else {
      console.log('ok, did not get content because it already exists?')
    }
  },
  head() {
    return {
      title: 'Brik Labs'
    }
  }
}
</script>
