import * as contentful from 'contentful'
import pkg from './package'

require('dotenv').config()

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Brik Labs',
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
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity:
          'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
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
  css: ['~/assets/style/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

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
    subFolders: false,
    fallback: true,
    routes: async () => {
      const config = {
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CD_ACCESS_TOKEN
      }
      const client = await contentful.createClient(config)

      const page = client
        .getEntries({
          content_type: 'page',
          'fields.simple': true
        })
        .then(res =>
          res.items.map(entry => {
            return {
              route: entry.fields.slug,
              payload: entry
            }
          })
        )
      const prototype = client
        .getEntries({
          content_type: 'prototype'
        })
        .then(res =>
          res.items.map(entry => {
            return {
              route: `/prototype/${entry.fields.slug}`,
              payload: entry
            }
          })
        )
      const blog = client
        .getEntries({
          content_type: 'blogPost'
        })
        .then(res =>
          res.items.map(entry => {
            return {
              route: `/blog/${entry.fields.slug}`,
              payload: entry
            }
          })
        )
      return Promise.all([page, prototype, blog]).then(res => [
        ...res[0],
        ...res[1],
        ...res[2]
      ])
    }
  }
}
