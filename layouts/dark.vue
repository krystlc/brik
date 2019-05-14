<template>
  <div class="hero is-fullheight is-dark">
    <transition name="nav">
      <layout-drawer v-if="drawer" />
    </transition>
    <header class="hero-head">
      <layout-toolbar is-dark />
    </header>
    <nuxt />
    <footer class="hero-foot">
      <layout-footer mini />
    </footer>
  </div>
</template>

<script>
import LayoutToolbar from '@/components/ui/LayoutToolbar'
import LayoutDrawer from '@/components/ui/LayoutDrawer'
import LayoutFooter from '@/components/ui/LayoutFooter'

export default {
  components: { LayoutToolbar, LayoutDrawer, LayoutFooter },
  computed: {
    drawer() {
      return this.$store.state.app.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-foot {
  padding: 0 0 1em;
}
</style>
