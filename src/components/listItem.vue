<template>
	<div class="list__item--wrapper" :class="{ task_is_done : task.isDone}">
		<div class="row justify-content-center">
			<div class="col-1">
				<input type="checkbox" name="isDone" v-model="task.isDone">
			</div>
			<div class="col-8">
				<input type="text" v-model="task.text">
			</div>
			<div class="col-1">
				<button @click="removeTasks(index)">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
		</div> 
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: 'listItem',
		props: ['task','index'],
		data() {
			return {
				taskText: this.task.text
			}
		},
		watch: {
			taskText () {
				// this.debounce( function () {
				// 	console.log('teste');
				// }, 200)
					console.log('teste');
			}
			// checkBox () {				
			// 	var 	index = this.taskIndex,
			// 		checkBox = this.checkBox
			// 	this.$store.commit('UPDATE_TASK_STATUS', {index, checkBox})
			// }
		},
		methods: {
			...mapActions([ 'removeTask','updateStatus' ]),
			removeTasks (index) {
				//this.removeTask(index)
				this.$store.dispatch('removeTask', index)
			},
			debounce(func, wait, immediate) {
				var timeout;

				return function executedFunction() {
					var context = this;
					var args = arguments;
						
					var later = function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);			
					if (callNow) func.apply(context, args);
				}
			}
		}
	}
</script>

<style>
	.task_is_done {
		opacity: 0.5;
	}
	.list__item--wrapper {
		padding: 12px;
		background: #fff;
	}
	.list__item--wrapper p {
		padding: 0;
		margin: 0;
	}
	.list__item--wrapper input {
		width: 100%;
	}
</style>


