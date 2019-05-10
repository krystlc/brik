<template>
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="control">
            Brik Labs LLC &copy; 2019.
          </p>
        </div>
        <div class="level-item">Made in Florida, USA.</div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a
            v-for="(social, i) in socials"
            :key="i"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="icon is-medium"
          >
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
