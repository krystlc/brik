<template>
  <v-app>
    <layout-header />
    <nuxt />
    <layout-footer />
  </v-app>
</template>

<script>
import LayoutHeader from '@/components/ui/LayoutHeader'
import LayoutFooter from '@/components/ui/LayoutFooter'

export default {
  components: { LayoutHeader, LayoutFooter }
}
</script>
