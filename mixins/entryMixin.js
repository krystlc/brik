export default {
  computed: {
    entry() {
      return this.$store.state.entry.currentEntry
    },
    isLoading() {
      return this.$store.state.entry.isLoading
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
