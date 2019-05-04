<template>
  <div>
    <layout-drawer />
    <layout-toolbar />
    <main>
      <nuxt />
    </main>
    <layout-footer />
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
