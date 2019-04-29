import client from '@/plugins/contentful'

export const state = () => ({
  currentEntry: {},
  isLoading: true
})

export const mutations = {
  setCurrentEntry(state, payload) {
    state.currentEntry = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getEntryBySlug({ commit }, params) {
    commit('setLoading', true)
    const response = await client.getEntries({
      'fields.slug': params.slug,
      content_type: params.type
    })
    commit('setCurrentEntry', response.items[0])
    commit('setLoading', false)
  },
  clearCurrentEntry({ commit }) {
    commit('setCurrentEntry', {})
    commit('setLoading', true)
  }
}
