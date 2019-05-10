export default {
  computed: {
    copy() {
      return this.$renderRichText(this.entry.fields.copy)
    }
  },
  head() {
    return {
      title: `${this.entry.fields.title} | Brik Labs`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.entry.fields.shortDescription
        }
      ]
    }
  }
}
