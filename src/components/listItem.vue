<template>
	<div class="list__item--wrapper" :class="{ task_is_done : task.isDone}">
		<div class="row justify-content-center align-items-center">
			<div class="col-auto">
				<label :for="'task-' + index" class="checkbox__label"></label>
				<input class="d-none" type="checkbox" :id="'task-' + index" v-model="task.isDone">
			</div>
			<div class="col">
				<input type="text" v-model="task.text">
			</div>
			<div class="col-auto">
				<button @click="removeTasks(index)" class="remove__task__btn">
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
		margin: 9px 0;
		padding: 12px;
		background: #fff;
		border-radius: 4px;
	}
	.list__item--wrapper input[type=text] {
		width: 100%;
		border: 1px solid #fff;
		padding: 9px 18px;
		border-radius: 2px;
		color: #646464;
	}
	.list__item--wrapper input:focus {
		outline: none;
		/* border-color: antiquewhite; */
		border: 1px solid #999;
		color: #1b1b1b;
	}
	.checkbox__label {
		width: 27px;
		height: 27px;
		border: #999 2px solid;
		border-radius: 50%;
		margin: 0;
	}
	.task_is_done .checkbox__label {
		border-color: green;
	}
	.remove__task__btn {
		border: none;
		background: none;
		padding: 9px 12px;
	}
</style>


