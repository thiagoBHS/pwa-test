<template>
     <div class="list__header">
          <router-link to="/">voltar</router-link>
          <h1>{{title}}</h1>
     </div>
</template>
     
<script>
export default {
     name: 'ListaHeader',
     props: ['title']
}
</script>

<style scoped>
     .list__header {
          background: #0069da;
          padding: 18px;
     }
     .list__header h1 {
          color: #fff;
          text-align: center;
     }
</style>
