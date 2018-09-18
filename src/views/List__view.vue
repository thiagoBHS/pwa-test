<template>
     <div>
          <list-header/>
          <div class="container">
               <list-item v-for="task in tasks" :key="task.index" :taskText="task.taskText" :modelo="task.index"/>
               <!-- <div class="list__item- -wrapper">
                    <button @click="addTask()" class="add__task">
                         <div class="row justify-content-center">
                              <div class="col-1">
                                   <i class="fas fa-plus"></i>
                              </div>
                              <div class="col-8">
                                   <p>Adicionar nova tarefa</p>
                              </div>
                              <div class="col-1"></div>
                         </div>
                    </button>
               </div> -->
               <form @submit.prevent="addTask" class="list__item--wrapper">
                    <input type="text" placeholder="adicionar tarefa" v-model="newTask">
               </form>
               <p class="task__counter">existe {{ countTasks }} tarefas</p>
          </div>
     </div>
</template>

<script>
     import { mapState, mapGetters, mapMutations } from "vuex";
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
                    // taskses: [
                    //      { taskText: 'Levar o lixo', isDone: false},
                    //      { taskText: 'Lavar a louça', isDone: false},
                    //      { taskText: 'Passar vassoura', isDone: false},
                    //      { taskText: 'Passoar com o cachorro', isDone: false},
                    //      { taskText: 'Comprar pão', isDone: false}
                    // ],
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
                addTask() {
                     this.ADD_TASK({ taskText: this.newTask, isDone: false})
                     this.newTask = ''
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

