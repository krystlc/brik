<template>
  <main id="mission">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <hgroup>
              <h1 class="title is-1">
                {{ title }}
              </h1>
              <h2 class="subtitle">
                {{ description }}
              </h2>
            </hgroup>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half-desktop">
            <div class="content" v-html="copy"></div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <timeline />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Timeline from '@/components/Timeline'
import entryMixin from '@/mixins/entryMixin'

export default {
  components: { Timeline },
  mixins: [entryMixin],
  asyncData() {
    const entry = require('~/static/data/page.json').find(
      e => e.fields.slug === 'mission'
    )
    return { entry }
  }
}
</script>
