<template>
  <header>
    <v-toolbar
      v-scroll="onScroll"
      app
      dark
      :flat="!isScrolling"
      :color="!isScrolling ? 'transparent' : 'secondary'"
    >
      <v-toolbar-title>
        <router-link to="/">Brik Labs</router-link>
      </v-toolbar-title>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          flat
        >
          <span v-text="item.title" />
        </v-btn>
      </v-toolbar-items>
      <template v-else>
        <v-spacer />
        <v-btn @click="toggle">
          <v-icon>menu</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolling: false
    }
  },
  computed: {
    title() {
      return this.$store.state.app.title
    },
    items() {
      return this.$store.state.app.items
    }
  },
  methods: {
    toggle() {
      this.$store.commit('app/toggleDrawer')
    },
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 100
    }
  }
}
</script>
