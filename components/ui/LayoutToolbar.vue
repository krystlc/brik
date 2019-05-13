<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="~/static/logo.svg" class="logo" :alt="title" />
        </router-link>
        <span class="navbar-burger burger" @click.prevent="toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div v-for="(item, i) in items" :key="i" class="navbar-item">
            <router-link :to="item.to" router exact>
              <span v-text="item.title" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.app.items
    },
    title() {
      return this.$store.state.app.title
    }
  },
  methods: {
    toggle() {
      this.$store.commit('app/toggleDrawer')
    }
  }
}
</script>
