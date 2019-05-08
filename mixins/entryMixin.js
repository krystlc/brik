export default {
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
