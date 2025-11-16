import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { id: string; name: string; email: string },
    token: ''
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    setUser(payload: { id: string; name: string; email: string }, token: string) {
      this.user = payload
      this.token = token
    },
    logout() {
      this.user = null
      this.token = ''
    }
  }
})
