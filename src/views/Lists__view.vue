<template>
     <div class="container">
          <div class="row justify-content-center">
               <div class="col-10">
                    <h1>Listas</h1>
               </div>
          </div>
          <div class="list--wrapper" v-for="list in lists" :key="list.id">
               <div class="row justify-content-center">
                    <div class="col">
                         {{ list.name }}
                    </div>
                    <div class="col-auto">
                         <router-link :to="'/' + list.id">ver lista</router-link>
                    </div>
               </div>
          </div>
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
     .list--wrapper {
          background: #fff;
          padding: 30px;
          border-radius: 4px;
          margin: 18px 0;
     }     
</style>
