<template>
  <v-app>
    <layout-drawer />
    <layout-toolbar />
    <nuxt />
    <layout-footer />
  </v-app>
</template>

<script>
import LayoutToolbar from '@/components/ui/LayoutToolbar'
import LayoutDrawer from '@/components/ui/LayoutDrawer'
import LayoutFooter from '@/components/ui/LayoutFooter'

export default {
  components: { LayoutToolbar, LayoutDrawer, LayoutFooter }
}
</script>
