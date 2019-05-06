<template>
  <main id="prototypes">
    <section class="section">
      <div class="container">
        <h1 class="title is-1 has-text-centered">Prototypes</h1>
        <div class="columns is-centered">
          <div
            v-for="(prototype, i) in prototypes"
            :key="i"
            class="column is-one-third"
          >
            <nuxt-link
              :to="`/prototype/${prototype.fields.slug}`"
              class="card is-block"
            >
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="title">{{ prototype.fields.title }}</h3>
                  <p class="subtitle">
                    {{ prototype.fields.shortDescription }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    prototypes() {
      return this.$store.state.prototypes.prototypes
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('prototypes/getPrototypes', params.slug)
  },
  head() {
    return {
      title: 'Prototypes - Brik Labs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Brik Labs prototype designs and specifications.'
        }
      ]
    }
  }
}
</script>
