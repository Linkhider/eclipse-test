import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
    actions: {
      async fetchCurrency() {
        const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        return await res.json()
      }
    },
  modules: {
  }
})
