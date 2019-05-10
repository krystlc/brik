<template>
  <main id="mission">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <hgroup>
              <h1 class="title is-1">
                {{ entry.fields.title }}
              </h1>
              <h2 class="subtitle">
                {{ entry.fields.shortDescription }}
              </h2>
            </hgroup>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop">
            <p>
              {{ entry.fields.copy.content[0].content[0].value }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title is-2 has-text-centered has-text-weight-light">
              Timeline
            </h3>
            <div class="timeline is-centered">
              <header class="timeline-header">
                <span class="tag is-medium is-primary">
                  <i class="fa fa-seedling"></i
                ></span>
              </header>
              <div class="timeline-item">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">January 2016</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker is-primary"></div>
                <div class="timeline-content">
                  <p class="heading">February 2016</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <header class="timeline-header">
                <span class="tag is-primary">2017</span>
              </header>
              <div class="timeline-item">
                <div class="timeline-marker is-danger is-icon">
                  <i class="fa fa-flag"></i>
                </div>
                <div class="timeline-content">
                  <p class="heading">March 2017</p>
                  <p>Timeline content - Can include any HTML element</p>
                </div>
              </div>
              <header class="timeline-header">
                <span class="tag is-medium is-secondary">
                  <i class="fa fa-ellipsis-h"></i
                ></span>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h3 class="title is-3 has-text-weight-light">Prototype Zero</h3>
            <p class="subtitle">
              learn more about blah blah...
              <nuxt-link to="/">read more</nuxt-link>
            </p>
            <hr />
          </div>
          <div class="column">
            <call-to-action />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import entryMixin from '@/mixins/entryMixin'
import CallToAction from '@/components/CallToAction'

export default {
  components: { CallToAction },
  mixins: [entryMixin],
  asyncData() {
    const entry = require('~/static/data/page.json')
    return { entry: entry.find(e => e.fields.slug === 'mission') }
  },
  head() {
    return {
      title: 'Mission | Brik Labs',
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/bulma-extensions@6.2.5/bulma-timeline/dist/css/bulma-timeline.min.css'
        }
      ]
    }
  }
}
</script>
