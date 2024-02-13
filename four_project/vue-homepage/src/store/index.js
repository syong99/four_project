// eslint-disable-next-line
/* eslint-disable */
import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state () {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    login (state) {
      state.isLoggedIn = true
    },
    logout (state) {
      state.isLoggedIn = !this.isLoggedIn
    }
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    performLogin ({ commit }) {
      // 로그인 로직을 여기에 추가
      // 성공 시 commit('login')
    },
    performLogout ({ commit }) {
      // 로그아웃 로직을 여기에 추가
      // 성공 시 commit('logout')
    }
  },
  plugins: [
    persistedstate({
      paths:['isLoggedIn']
    })
  ]
})

export default store;
