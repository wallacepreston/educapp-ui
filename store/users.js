import apiClient from '../util/apiClient'
export const state = () => ({
  users: [],
  user: {}
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  async fetchUsers({ commit }) {
    const { data: { data } } = await apiClient.get('/users')
    console.log(data)
    commit('SET_USERS', data)
  },
  async fetchUser({ commit }, id) {
    const { data } = await apiClient.get(`/users/${id}`)
    console.log(data)
    commit('SET_USER', data)
  }
}