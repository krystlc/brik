<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Brik Labs</router-link>
        <span class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <button @click="toggle">menu</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
