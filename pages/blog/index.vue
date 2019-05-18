<template>
  <main id="blog">
    <section class="hero is-small has-hero-background has-background-grey-dark">
      <div
        class="hero-background is-overlay"
        :style="
          `background-image: url('${
            posts[0].fields.cover.fields.file.url
          }?w=1280&fl=progressive')`
        "
      ></div>
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h2 class="title is-2 has-text-weight-light">
                    {{ posts[0].fields.title }}
                  </h2>
                  <p>
                    {{ posts[0].fields.shortDescription }}
                  </p>
                </div>
                <nuxt-link
                  class="button is-rounded is-pulled-right is-icon"
                  :to="`/blog/${posts[0].fields.slug}`"
                  ><i class="fa fa-plus"></i
                ></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="posts.length > 1" class="section">
      <div class="container">
        <div class="columns is-multiline is-centered">
          <div
            v-for="(post, i) in posts"
            :key="i"
            class="column is-one-third-desktop"
          >
            <nuxt-link :to="`/blog/${post.fields.slug}`" class="card is-block">
              <article class="card-content">
                <div class="content">
                  <h3 class="title is-4 has-text-weight-normal">
                    {{ post.fields.title }}
                  </h3>
                  <p class="subtitle is-6">
                    {{ post.fields.shortDescription }}
                  </p>
                </div>
              </article>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  asyncData() {
    const posts = require('~/static/data/blogPost.json')
    return { posts }
  },
  head() {
    return {
      title: 'Blog | Brik Labs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Read the latest Brik Labs news, prototype milestones, helpful agriculture technology articles and more.'
        },
        {
          property: `og:title`,
          content: `Prototypes | Brik Labs`
        },
        {
          property: 'og:description ',
          content:
            'Read the latest Brik Labs news, prototype milestones, helpful agriculture technology articles and more.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-body {
  padding-bottom: 0;
  .card {
    bottom: -3em;
  }
}
</style>
