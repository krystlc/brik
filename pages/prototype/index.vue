<template>
  <v-layout>
    <v-flex>
      <h1>Prototypes</h1>
      <ul>
        <li v-for="(prototype, i) in prototypes" :key="i">
          <nuxt-link :to="`/prototype/${prototype.fields.slug}`">
            {{ prototype.fields.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-flex>
  </v-layout>
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
  }
}
</script>
