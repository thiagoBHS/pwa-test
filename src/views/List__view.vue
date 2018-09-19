<template>
     <div>
          <list-header/>
          <div class="container">
                <ul>
                      <li v-for="(task, index) in tasks" :key="task.index">
                        <list-item :taskText="task.taskText" :modelo="task.index"/>
                        <button @click="removeTasks(index)">
                              <i class="far fa-trash-alt"></i>
                        </button>
                      </li>
                </ul>
               <form @submit.prevent="addTask" class="list__item--wrapper">
                    <input type="text" placeholder="adicionar tarefa" v-model="newTask">
               </form>
               <p class="task__counter">existe {{ countTasks }} tarefas</p>
          </div>
     </div>
</template>

<script>
//criar whatch do chack bom
     import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
     import listHeader from '@/components/listHeader'
     import listItem from '@/components/listItem'

     export default {
            name: 'listView',
            components: {
                  listHeader,
                  listItem
            },
            data() {
                  return {
                        newTask: ''
                  }
            },
          computed: {
                  ...mapState({
                        tasks: 'tasks'
                  }),
                  ...mapGetters([
                        'countTasks'
                  ])
            },
            methods: {
                  ...mapMutations([
                        'ADD_TASK'
                  ]),
                  ...mapActions([
                        'removeTask'
                  ]),
                  addTask () {
                        this.ADD_TASK({ taskText: this.newTask, isDone: false})
                        this.newTask = ''
                  },
                  removeTasks (index) {
                        this.removeTask(index)
                  }
            }
     }
</script>

<style scoped>
     .add__task {
          background: none;
          border: none;
          display: inline;
     }
     .task__counter {
          margin-top: 50px;
     }
</style>

