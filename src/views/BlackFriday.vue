<template>
     <div class="container">
          <div class="row">
               <div class="col-12">

                    <card-produto :produto="produto"></card-produto>

               </div>
          </div>
     </div>
</template>

<script>
import CardProduto from '@/components/base_produtoCard'
export default {
     name: 'black-friday',
     components: { CardProduto },
     data() {
          return {
               produto: {
                    nome: 'garrafa harry potter pomo de ouro',
                    preço: {
                         de: 9999.99,
                         por: 9999.99
                    },
                    star: {
                         rate: 3.6,
                         avaliation: 30
                    },
                    img: 'https://loja.imaginarium.com.br/arquivos/ids/2096175-400-400/Garrafa-termica-harry-potter-pomo-de-ouro.jpg'
               }
          }
     },
}
</script>
