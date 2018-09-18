
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
     state: {
          title: 'My custom title',
          tasks: [
               { taskText: 'Levar o lixo', isDone: false},
               { taskText: 'Lavar a louça', isDone: false},
               { taskText: 'Passar vassoura', isDone: false},
          ],
     },
     getters: {
          countTasks: state => {
               return state.tasks.length
          }
     },
     mutations: {
          ADD_TASK: (state, task) => {
               state.tasks.push(task)
          }
     },
     actions: {

     }
})
