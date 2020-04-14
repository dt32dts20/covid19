export const state = () => ({
  data: {}
})

export const mutations = {
  setData(state, data) {
    state.data = data
  }
}

export const actions = {
  async getData({ commit }) {
    const data = await this.$axios
      .$get(process.env.apiUrl)
      .then(response => {
        return response.data
      })
      .catch(error => {
        /* TODO */
        return error
      })

    commit('setData', data)
  }
}
