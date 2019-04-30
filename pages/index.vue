<template>
  <v-content>
    <v-container class="light-green accent-2 pa-0" fluid>
      <v-layout>
        <v-flex>
          <v-container>
            <v-layout>
              <v-flex xs12 sm6>
                <hgroup>
                  <h1>One codebase.<br />Any platform.</h1>
                  <p>{{ entry.fields.shortDescription }}</p>
                  <v-btn round large>Get started ></v-btn>
                </hgroup>
                <p>{{ entry.fields.copy.content[0].content[0].value }}</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          <h2>Interested in the differences between hybrid and native apps?</h2>
          <p>
            Our new eBook breaks down everything you need to know—all the
            myths,lies,and misconceptions.
          </p>
          <v-btn round>Get started ></v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex text-xs-center xs10>
          <h2>An app development platform</h2>
          <p>
            We help developers build and deploy cross-platform apps. From open
            source to premium services, Ionic makes app creation lightning fast.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout :column="$vuetify.breakpoint.xsOnly" text-xs-center>
        <v-flex>
          3 column description
        </v-flex>
        <v-flex>
          3 column description
        </v-flex>
        <v-flex>
          3 column description
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          about briks
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          about briks
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          about briks
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout column justify-center align-center>
        <v-flex xs8 text-xs-center>
          <h2>Latest news</h2>
          <p>Keep upto date blah blah.</p>
        </v-flex>
        <v-flex xs12>
          <ul>
            <li v-for="(post, i) in posts" :key="i">
              <nuxt-link :to="`/blog/${post.fields.slug}`">{{
                post.fields.title
              }}</nuxt-link>
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          call to action!
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import mixin from '@/mixins/entryMixin'

export default {
  layout: 'landing',
  mixins: [mixin],
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('entry/getEntryBySlug', {
      type: 'page',
      slug: 'home'
    })
    await store.dispatch('posts/getPosts', params.slug)
  },
  head() {
    return {
      title: 'Brik Labs'
    }
  }
}
</script>
