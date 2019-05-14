<template>
  <div>
    <transition name="nav">
      <layout-drawer v-if="drawer" />
    </transition>
    <header>
      <layout-toolbar />
    </header>
    <nuxt />
    <footer class="footer">
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
