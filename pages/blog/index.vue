<template>
  <main id="prototypes">
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-thirds-desktop">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <hgroup>
                    <h4 class="subtitle is-7">{{ posts[0].fields.date }}</h4>
                    <h2 class="title is-2 has-text-weight-light">
                      {{ posts[0].fields.title }}
                    </h2>
                  </hgroup>
                  <p>
                    {{ posts[0].fields.shortDescription }}
                  </p>
                </div>
                <button class="button is-rounded is-pulled-right is-icon">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div class="columns is-multiline is-centered">
          <div
            v-for="(post, i) in posts"
            :key="i"
            class="column is-one-third-desktop"
          >
            <nuxt-link :to="`/blog/${post.fields.slug}`" class="card is-block">
              <article class="card-content">
                <div class="content">
                  <hgroup>
                    <h4 class="subtitle is-7">{{ post.fields.date }}</h4>
                    <h3 class="title is-4 has-text-weight-normal">
                      {{ post.fields.title }}
                    </h3>
                  </hgroup>
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
    <section class="section">
      <div class="container">
        <div class="columns"></div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
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
        }
      ]
    }
  }
}
</script>
