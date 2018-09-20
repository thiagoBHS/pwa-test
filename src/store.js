
import Vue from 'vue'
import Vuex from 'vuex'
import firestore from './firebase'

Vue.use(Vuex)
Vue.use(firestore)

//export const new Vuex.Store({
export default new Vuex.Store({
     state: {
		//_isTrue: true,
		_tasks: []
     },
     getters: {
		//links
          countTasks: state => {
               return state._tasks.length
		},
		tasks: state => {
			//pegar as tarefas do state
			return state._tasks
		}
     },
     mutations: {
		//firestore
		CLEAR_TASKS: (state) => {
			state._tasks = []
		},
		GET_TASKS: (state, data) => {
			state._tasks.push(data)
		},
		//links
          ADD_TASK: (state,task) => {
			firestore.database.collection("minhas-tarefas").add({
				text: task,
				isDone: false
			})
			.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});
          },
          REMOVE_TASK: (state, id) => {
			//state.tasks.splice(index, 1)
			firestore.database.collection("minhas-tarefas").doc(id).delete().then(function() {
				console.log("Document successfully deleted!");
			}).catch(function(error) {
				console.error("Error removing document: ", error);
			});
		},
		UPDATE_TASK_STATUS: (stage, payload) => {
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
			firestore.database.collection('minhas-tarefas').onSnapshot(querySnaphot => {
				//limpar _task
				context.commit('CLEAR_TASKS')
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
