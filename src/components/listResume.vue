<template>
     <div>
          <ul  class="list--resume">
               <li v-for="task in tarefas" :key="task.index">
                    {{ task.text }}, {{task.isDone}}
               </li>
          </ul>
     </div>
</template>

<script>
export default {
     name: 'listResume',
     data() {
          return {
               tarefas: this.$store.state.tasks
          }
     }
}
</script>
