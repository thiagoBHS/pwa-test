<template>
     <div class="list__header">
          <h1>{{ custom }}</h1>
     </div>
</template>
     
<script>
import { mapState } from 'vuex'
export default {
     name: 'ListaHeader',
     computed: {
          ...mapState({
               custom: 'title'     
          })
     }
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
