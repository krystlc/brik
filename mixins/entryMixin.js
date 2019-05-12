export default {
  computed: {
    title() {
      return this.entry.fields.title
    },
    description() {
      return this.entry.fields.shortDescription
    },
    copy() {
      return this.$renderRichText(this.entry.fields.copy)
    },
    cover() {
      if (this.entry.fields.cover.hasOwnProperty('fields')) {
        return this.entry.fields.cover.fields.file.url
      } else {
        return false
      }
    },
    date() {
      const date = new Date(this.entry.sys.updatedAt)
      console.log(date)
      return date.toDateString()
    }
  },
  head() {
    const title =
      this.title !== 'Home' ? `${this.title} | Brik Labs` : 'Brik Labs'
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:image',
          content: `https:${this.cover}`
        }
      ]
    }
  }
}
