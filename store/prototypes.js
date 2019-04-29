import client from '@/plugins/contentful'

export const state = () => ({
  prototypes: []
})

export const mutations = {
  setPrototypes(state, payload) {
    state.prototypes = payload
  }
}

export const actions = {
  async getPrototypes({ commit }) {
    const response = await client.getEntries({
      content_type: 'prototype'
    })
    if (response.items.length > 0) {
      commit('setPrototypes', response.items)
    }
  }
}
