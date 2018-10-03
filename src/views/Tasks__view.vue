<template>
     <div>
          <list-header :title="getListName"/>
          <div class="container">

			<form @submit.prevent="addTask" class="list__item--wrapper">
                    <input type="text" placeholder="adicionar tarefa" v-model="newTask">
               </form>

                <ul class="list--wrapper">
				<li v-for="(task, index) in tasks" :key="task.index">
					<list-item :task="task" :index="index"/>
				</li>
                </ul>
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
			},
			getListName () {
				const listInfo = this.$store.getters.listInfo
				return listInfo.name
			}
		},
		methods: {
			toogleMe () {
				this.$store.dispatch('toogle')
			},
			addTask () {
				this.$store.dispatch('addTaskToList', this.newTask )
				this.newTask = ''
			}
		},
		created () {
			//this.$store.dispatch('getTasks',this.$route.params.tasks)
			this.$store.dispatch('setListView',this.$route.params.tasks)
		}
     }
</script>

<style scoped>
	.list--wrapper {
		list-style: none;
		padding: 36px 0;
	}
</style>

