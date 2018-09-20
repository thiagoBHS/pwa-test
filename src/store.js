
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex)
Vue.use(firebase)

//export const new Vuex.Store({
export default new Vuex.Store({
     state: {
          title: 'My custom title',
          tasks: [
               { text: '0 Levar o lixo', isDone: false},
               { text: '1 Lavar a louça', isDone: false},
               { text: '2 Passar vassoura', isDone: false},
		],
		_isTrue: true
     },
     getters: {
		//links
          countTasks: state => {
               return state.tasks.length
		},
		//firebase
		isTrue: state => {
			return state._isTrue
		}
     },
     mutations: {
		//firebase
		TOOGLE: function (state, bool) {
			state._isTrue = bool
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
		//firebase
		toogle (context) {
			let temp = !context.state._isTrue
			firebase.database.ref('settings/setting').set(temp)
		},
		getFirebaseDatabase (context) {
			//reformular para firestore
			firebase.database.ref('settings/setting').on('value', function (snapshopt) {
				context.commit('TOOGLE', snapshopt.val())
			})
		}
     }
})
