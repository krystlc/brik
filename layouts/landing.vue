<template>
  <div class="hero is-fullheight">
    <layout-drawer />
    <div class="hero-head">
      <layout-toolbar />
    </div>
    <nuxt />
    <div class="hero-foot">
      <layout-footer />
    </div>
  </div>
</template>

<script>
import LayoutToolbar from '@/components/ui/LayoutToolbar'
import LayoutDrawer from '@/components/ui/LayoutDrawer'
import LayoutFooter from '@/components/ui/LayoutFooter'

export default {
  components: { LayoutToolbar, LayoutDrawer, LayoutFooter }
}
</script>
