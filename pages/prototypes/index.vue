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
              :to="`/prototypes/${prototype.fields.slug}`"
              class="card is-block"
            >
              <div class="card-image">
                <figure class="image">
                  <img
                    :src="prototype.fields.cover.fields.file.url"
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
  asyncData() {
    const prototypes = require('~/static/data/prototype.json')
    return { prototypes }
  },
  head() {
    return {
      title: 'Prototypes | Brik Labs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Brik Labs prototype designs and specifications.'
        },
        {
          property: `og:title`,
          content: `Prototypes | Brik Labs`
        },
        {
          property: 'og:description ',
          content: 'Brik Labs prototype designs and specifications.'
        }
      ]
    }
  }
}
</script>
