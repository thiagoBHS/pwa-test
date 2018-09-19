
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
          },
          REMOVE_TASK: (state, index) => {
              state.tasks.splice(index, 1)
		},
		UPDATE_TASK_STATUS: (stage, index, done) => {
			console.log('UPDATE_TASK_STATUS - index: ', index, 'done: ', done);
			stage.tasks[index].isDone = done
		}
     },
     actions: {
		removeTask: (context, index) => {
			context.commit('REMOVE_TASK', index)
		},
		updateStatus: (context, index, done) => {
			console.log('updateStatus - index: ', index, 'done: ', done);
			context.commit('UPDATE_TASK_STATUS', index, done)
		}
     }
})
