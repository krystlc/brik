import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

const contentful = require('contentful')

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: async () => {
      const config = {
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      }
      const client = await contentful.createClient(config)

      let page = client.getEntries({
        content_type: 'page'
      }).then(res => res.items.map(entry => {
        return {
          route: entry.fields.slug,
          payload: entry
        }
      }))
      let prototype = client.getEntries({
        content_type: 'prototype'
      }).then(res => res.items.map(entry => {
        return {
          route: `/prototype/${entry.fields.slug}`,
          payload: entry
        }
      }))
      let blog = client.getEntries({
        content_type: 'blogPost'
      }).then(res => res.items.map(entry => {
        return {
          route: `/blog/${entry.fields.slug}`,
          payload: entry
        }
      }))
      return Promise.all([page, prototype, page]).then(res => [...res[0], ...res[1], ...res[2]])
    }
  }
}
