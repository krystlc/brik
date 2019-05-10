<template>
  <div>
    <h1 class="title is-1">{{ entry.fields.title }}</h1>
    <div class="content" v-html="copy"></div>
  </div>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  mixins: [mixin],
  asyncData({ params }) {
    const entry = require('~/static/data/blogPost.json').find(
      e => e.fields.slug === params.slug
    )
    return { entry }
  }
}
</script>
