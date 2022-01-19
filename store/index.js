import { createStore } from 'vuex'

const store = createStore({
  state: {
        pageType:'',
        firstName: 'John',
        lastName: 'Doe',
        count: 0
  },
  getters: {
        fullname:function(){

            
        }
  },
  mutations: {
      increment (state) {
            state.count++
      }
  },
  actions: {

  },
  modules: {

  }
})

export default store