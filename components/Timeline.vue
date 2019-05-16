<template>
  <div>
    <h3 class="title is-2 has-text-centered has-text-weight-light">
      Timeline
    </h3>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">
          <i class="fa fa-seedling"></i
        ></span>
      </header>
      <div v-for="(milestone, i) in milestones" :key="i" class="timeline-item">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">
            {{ milestone.fields.date.split('T')[0] }}
          </p>
          <p>
            {{ milestone.fields.title }} -
            {{ milestone.fields.shortDescription }}...
            <nuxt-link :to="`/blog/${milestone.fields.slug}`"
              >read more</nuxt-link
            >
          </p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-secondary">
          <i class="fa fa-ellipsis-h"></i
        ></span>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    milestones() {
      return require('~/static/data/blogPost.json').filter(
        e => e.fields.milestone === true
      )
    }
  }
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma-extensions@6.2.5/bulma-timeline/dist/css/bulma-timeline.min.css';
</style>
