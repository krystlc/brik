<template>
  <aside v-if="drawer">
    <button @click="toggle">x</button>
    <div>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <router-link :to="item.to" router exact>
            <span v-text="item.title" />
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    drawer() {
      return this.$store.state.app.drawer
    },
    items() {
      return this.$store.state.app.items
    }
  },
  methods: {
    toggle() {
      this.$store.commit('app/toggleDrawer')
    }
  }
}
</script>
