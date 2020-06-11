export const state = () => ({
  data: [],
  support: [],
  news: []
})

export const mutations = {
  setData(state, data) {
    state.data = data
  },
  setSupport(state, support) {
    state.support = support
  },
  setNews(state, news) {
    state.news = news
  }
}
