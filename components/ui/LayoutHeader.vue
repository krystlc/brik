<template>
  <header>
    <v-navigation-drawer v-model="drawer" app right>
      <v-list>
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
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/">Brik Labs</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          flat
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Mission',
          to: '/mission'
        },
        {
          icon: 'bubble_chart',
          title: 'Timeline',
          to: '/timeline'
        },
        {
          icon: 'bubble_chart',
          title: 'Prototypes',
          to: '/prototype'
        },
        {
          icon: 'bubble_chart',
          title: 'Blog',
          to: '/blog'
        }
      ],
      title: 'Brik Labs'
    }
  }
}
</script>
