import { createStore } from 'vuex'

export default createStore({
  state: {
    Brow: "first",
    Ear: "first",
    Eye: "first",
    Glass: "first",
    Hair: "first",
    Head: "first",
    Mouth: "first",
  },
  mutations: {
    changeEyes(state, number){
      state.Eye = number
    }
  },
  actions: {
  },
  modules: {
  }
})
