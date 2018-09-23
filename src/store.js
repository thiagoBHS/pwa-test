
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
		SET_TASKS: (state, data) => {
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
			firestore.database.collection("minhas-tarefas").doc(id)
			.delete()
			.then(function() {
				console.log("Document successfully deleted!");
			}).catch(function(error) {
				console.error("Error removing document: ", error);
			});
		},
		UPDATE_TASK_STATUS: (stage, task) => {
			firestore.database.collection("minhas-tarefas").doc(task.id)
			.set({ isDone: task.isDone }, {merge: true})
			.then(function() {
				console.log(task.id);
				
				if ( task.isDone ) console.log("Tarefa concluida")
				else console.log("tarefa desconcluida")
			}).catch(function(error) {
				console.error("Erro ao concluir tarefa", error);
			});
		},
		UPDATE_TASK_TEXT: (stage, task) => {
			firestore.database.collection('minhas-tarefas').doc(task.id)
			.set({ text: task.text }, {merge: true})
			.then(() => {
				console.log(task.id, 'editado')
			})
			.catch( error => {
				console.error("Error editing document: ", error);
			} )
		}
     },
     actions: {
		uptadeText: (context, task) => {
			context.commit('UPDATE_TASK_TEXT', task)
		},
		removeTask: (context, index) => {
			context.commit('REMOVE_TASK', index)
		},
		uptadeStatus: (context, task) => {
			//console.log('updateStatus - index: ', index, 'done: ', done);
			context.commit('UPDATE_TASK_STATUS', task)
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
					context.commit('SET_TASKS', data)
				})
			})
		}
     }
})
