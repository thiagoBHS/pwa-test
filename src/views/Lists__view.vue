<template>
     <div class="container">
          <router-link to="/black_friday">black Friday</router-link>
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
          <div class="row justyfi-content-center">
               <div class="col">
                    <div class="new__list--wrapper">
                         <!-- criarLista = False -->
                         <button>Criar lista</button>

                         <!-- criarLista = True -->
                         <div class="new__list--info">
                              <input type="text" name="newList" placeholder="Insira o nome da lista aqui">

                              <div class="new__list--info--color">
                                   <div class="row justify-content-between">
                                        <div class="col-auto">
                                             <label class="color-blue-label" for="color-blue"></label>
                                        </div>
                                        <div class="col-auto">
                                             <label class="color-yellow-label" for="color-yellow"></label>
                                        </div>
                                        <div class="col-auto">
                                             <label class="color-green-label" for="color-green"></label>
                                        </div>
                                        <div class="col-auto">
                                             <label class="color-red-label" for="color-red"></label>
                                        </div>
                                   </div>                               
                                   <input type="radio" name="color" id="color-blue">
                                   <input type="radio" name="color" id="color-yellow">
                                   <input type="radio" name="color" id="color-green">
                                   <input type="radio" name="color" id="color-red">
                              </div>
                         </div>
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

     .new__list--wrapper {
          background: #fff;
          border-radius: 4px;
          padding: 18px;
     }
     .new__list--wrapper button{
          background: #fff;
          width: 100%;
          border: none;
          padding: 9px 0;
          color: #005fdb;
          cursor: pointer;
     }
     .new__list--wrapper button:hover {
          color: #0479ff
     }
     .new__list--wrapper input[type=text] {
          width: 100%;
     }
     .new__list--info--color input {
          display: none;
     }     

     .color-blue-label { background: blue}
     .color-yellow-label { background: yellow}
     .color-green-label { background: green}
     .color-red-label { background: red}
     .new__list--info--color label{
          width: 36px;
          height: 36px;
          border-radius: 18px;
     }
</style>
