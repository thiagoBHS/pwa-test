<template>
     <div>
          <list-header/>
          <div class="container">
                <ul class="list--wrapper">
				<li v-for="(task, index) in tasks" :key="task.index">
					<!-- <list-item :taskText="task.taskText" :modelo="task.index" :taskIndex="index"/> -->
					<list-item :task="task" :index="index"/>
				</li>
                </ul>
               <form @submit.prevent="addTask" class="list__item--wrapper">
                    <input type="text" placeholder="adicionar tarefa" v-model="newTask">
               </form>
			<button @click="toogleMe">toogle me</button>
               <p class="task__counter" v-if="isTrue">existe {{ countTasks }} tarefas</p>
          </div>
     </div>
</template>

<script>
     import listHeader from '@/components/listHeader'
	import listItem from '@/components/listItem'

     export default {
		name: 'listView',
		components: {
			listHeader,
			listItem,
		},
		data() {
			return {
				newTask: '',
			}
		},
          computed: {
			countTasks () {
				return this.$store.getters.countTasks
			},
			isTrue () {
				return this.$store.getters.isTrue
			},
			tasks () {
				return this.$store.getters.tasks
			}
		},
		methods: {
			toogleMe () {
				this.$store.dispatch('toogle')
			},
			addTask () {
				this.$store.commit('ADD_TASK', this.newTask )
				this.newTask = ''
			}
		},
		created () {
			this.$store.dispatch('getFirestoreDB')
		}
     }
</script>

<style scoped>
	.list--wrapper {
		list-style: none;
	}
     .add__task {
          background: none;
          border: none;
          display: inline;
     }
     .task__counter {
          margin-top: 50px;
     }
</style>

