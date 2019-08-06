import apiClient from '../util/apiClient'
export const state = () => ({
  invoices: [],
  invoice: {}
})

export const mutations = {
  SET_INVOICES(state, invoices) {
    state.invoices = invoices
  },
  SET_INVOICE(state, invoice) {
    state.invoice = invoice
  }
}

export const actions = {
  async fetchInvoices({ commit }) {
    const { data: { data } } = await apiClient.get('/invoices')
    console.log(data)
    commit('SET_INVOICES', data)
  },
  async fetchInvoice({ commit }, id) {
    const { data } = await apiClient.get(`/invoices/${id}`)
    console.log(data)
    commit('SET_INVOICE', data)
  }
}