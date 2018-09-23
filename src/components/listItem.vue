<template>
	<div class="list__item--wrapper" :class="{ task_is_done : task.isDone}">
		<div class="row justify-content-center align-items-center">
			<div class="col-auto">
				<label :for="'task-' + index" class="checkbox__label"></label>
				<input class="d-none" type="checkbox" :id="'task-' + index" v-model="task.isDone">
			</div>
			<div class="col">
				<input type="text" v-model="task.text" @change="taxtChange(task)">
			</div>
			<div class="col-auto">
				<button @click="removeTasks(task.id)" class="remove__task__btn">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		name: 'listItem',
		props: ['task','index'],
		data() {
			return {
				//...
			}
		},
		watch: {
			taskText () {
				console.log('teste');
			}
		},
		methods: {
			removeTasks (id) {
				this.$store.dispatch('removeTask',id)
			},
			taxtChange (objNewText) {
				//console.log(newtext);
				this.$store.dispatch('uptadeText',objNewText)
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


