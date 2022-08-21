import { createStore } from 'vuex'

export default createStore({
  state: {
    sideBar: false,
    sideBarButton: false,
    filterName: '',
  },
  getters: {
    name: state =>  state.filterName,
  },
  mutations: {
    showSideBar: state => {state.sideBar = !state.sideBar},
    showSideBarButton: state => {state.sideBarButton = true},
    hideSideBarButton: state => {state.sideBarButton = false},
    changeName(state, nome){state.filterName = nome},
  },
  actions: {
    //changeName: ({commit}) => commit('changeName', nome)
  },
  modules: {
  }
})
