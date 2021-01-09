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

    visiblePart:'heads'
  },
  mutations: {
    changeEyes(state, number){
      state.Eye = number
    },
    changeHead(state, number){
      state.Head = number
    },
    updateVisiblePart(state, part){
      state.visiblePart = part 
    }
    
  },
  actions: {
  },
  modules: {
  }
})
