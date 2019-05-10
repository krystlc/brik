import pkg from './package'

export default {
  mode: 'universal',
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
  loading: { color: '#fff' },
  css: ['~/assets/style/app.scss'],
  plugins: ['~/plugins/renderRichText'],
  modules: ['~/modules/getContent'],
  build: {
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
    routes: () => {
      const pages = require('./static/data/page.json')
        .filter(e => e.fields.simple === true)
        .map(page => `${page.fields.slug}`)
      const prototypes = require('./static/data/prototype.json').map(
        proto => `/prototype/${proto.fields.slug}`
      )
      const posts = require('./static/data/blogPost.json').map(
        post => `/blog/${post.fields.slug}`
      )
      return [...pages, ...prototypes, ...posts]
    }
  }
}
