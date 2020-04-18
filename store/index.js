export const state = () => ({
  data: [],
  news: []
})

export const mutations = {
  setData(state, data) {
    state.data = data
  },
  setNews(state, news) {
    state.news = news
  }
}
