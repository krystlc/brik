<template>
  <aside id="drawer" class="hero is-success is-fullheight is-overlay">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop">
            <ul>
              <li
                v-for="(item, i) in items"
                :key="i"
                class="is-size-1 has-text-weight-bold"
              >
                <router-link :to="item.to" router exact>
                  <span @click="toggle" v-text="item.title" />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.app.items
    }
  },
  mounted() {
    document.getElementsByTagName('body')[0].className = 'has-drawer'
  },
  beforeDestroy() {
    document.getElementsByTagName('body')[0].classList.remove('has-drawer')
  },
  methods: {
    toggle() {
      this.$store.commit('app/toggleDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
#drawer {
  z-index: 30;
}
</style>
