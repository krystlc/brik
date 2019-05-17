<template>
  <main>
    <section class="hero is-dark has-hero-background">
      <div
        class="hero-background is-overlay"
        :style="`background-image: url('${cover}?w=1280&fl=progressive')`"
      ></div>
      <div class="hero-body">
        <div class="container">
          <hgroup>
            <h5 class="heading has-text-weight-bold">
              Published {{ formatDate(date) }}
            </h5>
            <h1 class="title is-1">{{ title }}</h1>
            <h2 class="subtitle">{{ description }}</h2>
          </hgroup>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half-desktop">
            <div class="content">
              <div v-html="copy"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import moment from 'moment'
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  asyncData({ params }) {
    const entry = require('~/static/data/blogPost.json').find(
      e => e.fields.slug === params.slug
    )
    return { entry }
  },
  methods: {
    formatDate(date) {
      return moment(date).format('dddd, MMMM Do, YYYY')
    }
  }
}
</script>
