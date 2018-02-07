import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义state
    user: null,
    publicKey: ''
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    EXIT: (state) => {
      state.user = null
    }
  },
  actions: {
    setUser: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        axios.get('/node_common/getSession').then((json) => {
          const res = json.data
          if (res.code === 0) {
            commit('SET_USER', res.response.session.user)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    exit: ({commit}) => {
      commit('EXIT')
    }
  }
})
