<template>
  <aside id="drawer" class="hero is-success is-fullheight is-overlay">
    <button class="button is-large is-overlay" @click="toggle">
      <i class="fas fa-times"></i>
    </button>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop">
            <ul class="is-size-1 has-text-weight-bold">
              <li>
                <router-link to="/" router exact
                  ><span @click="toggle">Home</span></router-link
                >
              </li>
              <li v-for="(item, i) in items" :key="i">
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
  z-index: 100;
  .button {
    left: auto;
    position: absolute;
    border: none;
    background-color: transparent;
    color: #fff;
  }
}
</style>
