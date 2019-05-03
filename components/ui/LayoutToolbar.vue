<template>
  <v-toolbar app flat>
    <v-toolbar-title>
      <router-link to="/">Brik Labs</router-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="toggle">
      <v-icon>menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$store.commit('app/toggleDrawer')
    }
  }
}
</script>
