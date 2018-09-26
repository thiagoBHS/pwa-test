
import Vue from 'vue'
import Vuex from 'vuex'
import firestore from './firebase'

Vue.use(Vuex)
Vue.use(firestore)

//export const new Vuex.Store({
export default new Vuex.Store({
     state: {
		_lists: [],
		_tasks: [],
		_listinfo: {},
		_isLoadingActive: false
     },
     getters: {
		//links
          countTasks: state => {
               return state._tasks.length
		},
		tasks: state => {
			//pegar as tarefas do state
			return state._tasks
		},
		lists: state => {
			return state._lists
		},
		getLoadingState: state => {
			return state._isLoadingActive
		},
		listsInfo: state => {
			return state._listinfo
		},
	},
     mutations: {
		//firestore
		SET_LISTS: (state, data) => {
			state._lists.push(data)
		},
		CLEAR_ALL_LISTS: (state) => {
			state._lists = []
		},
		CLEAR_TASKS: (state) => {
			console.log(state._tasks);
			console.log('clear');
			
			state._tasks = []
			console.log(state._tasks);
		},
		SET_TASKS: (state, data) => {
			state._tasks.push(data)
		},
          ADD_TASK: (state,task) => {
			firestore.database.collection("listas").doc(task.listId).collection('tarefas').add({
				text: task.taskText,
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
			const list = state._listinfo
			console.log(list);
			
			firestore.database.collection("listas").doc(list.id).collection('tarefas').doc(id)
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
		},
		SET_LOADING: (stage, bool) => {
			stage._isLoadingActive = bool
		},
		SET_LIST_INFO: (state, data) => {
			state._listinfo = data
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
			context.commit('UPDATE_TASK_STATUS', task)
		},
		createList: (context, list) => {
			firestore.database.collection(list.name).doc('settings').add({
				name: list.name,
				color:list.color
			})
			.then( () => {
				console.log('lista criada com sucesso');
				//push to list
			}).catch( (error) => {
				console.log('occoreu um erro ', error);
				
			} )
		},
		getAllList: (context) => {
			firestore.database.collection('listas').onSnapshot(querySnaphot => {
				context.commit('CLEAR_ALL_LISTS')
				querySnaphot.forEach( doc => {
					
					const data = {
						'id': doc.id,
						'name': doc.data().name,
						'color': doc.data().color
					}
					
					context.commit('SET_LISTS', data)
				})
			})
		},
		setTasks: (context, doc) => {

			const db = doc.collection('tarefas')

			db.onSnapshot(querySnaphot => {

				context.commit('CLEAR_TASKS')
				
				querySnaphot.forEach( doc => {
					
					//monta o objetio
					const data = {
						'id': doc.id,
						'text': doc.data().text,
						'isDone': doc.data().isDone
					}
					context.commit('SET_TASKS', data)
				})
			})
		},
		setListData: (context, list) => {
			
			list.get().then( doc => {
				if (doc.exists) {
					
					const listInfo = {
						id: doc.id,
						color: doc.data().color,
						name: doc.data().name
					}

					context.commit('SET_LIST_INFO', listInfo)
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			}).catch(function(error) {
				console.log("Error getting document:", error);
			});
		},
		setListView: (context, listId) => {
			//..
			const list = firestore.database.collection('listas').doc(listId)

			context.dispatch('setListData', list)
			
			context.dispatch('setTasks', list)

		},
		addTaskToList: (context, task) => {

			const listId = context.state._listinfo.id
				// list = firestore.database.collection('listas').doc(listId)
			
			context.commit('ADD_TASK', {
				listId, taskText: task})
			
		}
     }
})
