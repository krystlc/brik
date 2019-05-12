<template>
  <div class="columns is-mobile">
    <div class="column">
      <h3 class="menu-label">Navigation</h3>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <nuxt-link :to="item.to">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="column">
      <h3 class="menu-label">Contact</h3>
      <ul>
        <li>{{ title }}</li>
        <li>St. Petersburg, FL</li>
        <li>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.state.app.email
    },
    title() {
      return this.$store.state.app.title
    },
    items() {
      return this.$store.state.app.items
    }
  }
}
</script>
