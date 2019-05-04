<template>
  <div class="hero is-fullheight">
    <layout-drawer />
    <div class="hero-head">
      <layout-toolbar />
    </div>
    <nuxt />
    <div class="hero-foot">
      <div class="container has-text-right">
        <div class="level">
          <div class="level-left">
            <div class="level-item">something</div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span v-for="n in 4" :key="n">social</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutToolbar from '@/components/ui/LayoutToolbar'
import LayoutDrawer from '@/components/ui/LayoutDrawer'

export default {
  components: { LayoutToolbar, LayoutDrawer }
}
</script>
