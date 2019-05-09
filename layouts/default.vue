<template>
  <div class="hero is-fullheight">
    <layout-drawer v-if="drawer" />
    <header class="hero-head">
      <layout-toolbar />
    </header>
    <nuxt />
    <footer class="hero-foot">
      <layout-footer />
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
