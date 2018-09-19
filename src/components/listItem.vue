<template>
	<div class="list__item--wrapper">
		<div class="row justify-content-center">
			<div class="col-1">
				<input type="checkbox" name="isDone" :v-model="modelo">
			</div>
			<div class="col-8">
				<input type="text" :value="taskText">
			</div>
			<div class="col-1">
				<button @click="removeTasks(taskIndex)">
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
		props: ['taskText','modelo', 'taskIndex'],
		methods: {
			...mapActions([ 'removeTask' ]),
			removeTasks (index) {
				this.removeTask(index)
			}
		}
	}
</script>

<style>
	.list__item--wrapper {
		padding: 12px;
		border-bottom: 1px #666 solid;
	}
	.list__item--wrapper p {
		padding: 0;
		margin: 0;
	}
	.list__item--wrapper input {
		width: 100%;
	}
</style>


