<template>
     <div>
          <ul>
               <li v-for="list in lists" :key="list.id">
                    {{ list.name }}
               </li>
          </ul>
     </div>
</template>

<script>
export default {
     name: 'listas',
     computed: {
          lists() {
               return this.$store.getters.lists 
          }
     },
     created () {
          this.$store.dispatch('getAllList')
     }    
}
</script>

<style scoped>
     div {
          padding: 30px 60px;
     }
</style>
