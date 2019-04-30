<template>
  <v-navigation-drawer v-model="drawer" fixed temporary right>
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn icon @click="toggle">
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
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
