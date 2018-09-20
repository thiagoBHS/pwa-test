
import Vue from 'vue'
import Vuex from 'vuex'
import firestore from './firebase'

Vue.use(Vuex)
Vue.use(firestore)

//export const new Vuex.Store({
export default new Vuex.Store({
     state: {
          title: 'My custom title',
          tasks: [
               { text: '0 Levar o lixo', isDone: false},
               { text: '1 Lavar a louça', isDone: false},
               { text: '2 Passar vassoura', isDone: false},
		],
		_isTrue: true,
		_tasks: []
     },
     getters: {
		//links
          countTasks: state => {
               return state._tasks.length
		},
		//firebase
		isTrue: state => {
			return state._isTrue
		},
		tasks: state => {
			//pegar as tarefas do state
			return state._tasks
		}
     },
     mutations: {
		//firestore
		GET_TASKS: (state, data) => {
			state._tasks.push(data)
		},
		//links
          ADD_TASK: (state, task) => {
               state.tasks.push(task)
          },
          REMOVE_TASK: (state, index) => {
              state.tasks.splice(index, 1)
		},
		UPDATE_TASK_STATUS: (stage, payload) => {
			// console.log('UPDATE_TASK_STATUS - index: ', payload.index, 'done: ', payload.checkBox);
			stage.tasks[payload.index].isDone = payload.checkBox
		}
     },
     actions: {
		//links
		removeTask: (context, index) => {
			context.commit('REMOVE_TASK', index)
		},
		updateStatus: (context, index, done) => {
			//console.log('updateStatus - index: ', index, 'done: ', done);
			context.commit('UPDATE_TASK_STATUS', index, done)
		},
		getFirestoreDB (context) {
			firestore.database.collection('minhas-tarefas').get().then(querySnaphot => {
				querySnaphot.forEach( doc => {
					
					//monta o objetio
					const data = {
						'id': doc.id,
						'text': doc.data().text,
						'isDone': doc.data().isDone
					}
					
					//chama a Mutation para adicionar o Data
					context.commit('GET_TASKS', data)
				})
			})
		}
     }
})
