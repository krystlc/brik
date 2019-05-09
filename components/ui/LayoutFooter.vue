<template>
  <div class="container has-text-right">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="control">
            Brik Labs LLC &copy; 2019, Made in Florida, USA.
          </p>
        </div>
      </div>
      <div class="level-right">
        <div v-for="(social, i) in socials" :key="i" class="level-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i :class="`fab fa-${social.icon}`" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    socials() {
      return this.$store.state.app.socials
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 1.5em 0;
}
</style>
