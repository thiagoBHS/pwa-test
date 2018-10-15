<template>
     <div>
          <div class="container">
               <div class="row">
                    <div class="col-12 col-md">
                         <card-produto :produto="produto"></card-produto>
                    </div>
                    <div class="col-12 col-md">
                         <card-produto :produto="produto"></card-produto>
                    </div>
                    <div class="col-12 col-md">
                         <card-produto :produto="produto"></card-produto>
                    </div>
                    <div class="col-12 col-md">
                         <card-produto :produto="produto"></card-produto>
                    </div>
                    <div class="col-12 col-md">
                         <card-produto :produto="produto"></card-produto>
                    </div>
               </div>
          </div>
          <expasao-produto :produto="produto"/>
     </div>
</template>

<script>
import CardProduto from '@/components/base_produtoCard'
import ExpasaoProduto from '@/components/base_produtoExpandido'

export default {
     name: 'black-friday',
     components: { CardProduto, ExpasaoProduto },
     data() {
          return {
               produto: {
                    nome: 'garrafa harry potter pomo de ouro',
                    preco: {
                         de: 9999.99,
                         por: 9099.99
                    },
                    star: {
                         rate: 3.6,
                         avaliation: 30
                    },
                    img: 'https://loja.imaginarium.com.br/arquivos/ids/2096175-400-400/Garrafa-termica-harry-potter-pomo-de-ouro.jpg',
                    imgs: [
                         'https://loja.imaginarium.com.br/arquivos/ids/2096175-400-400/Garrafa-termica-harry-potter-pomo-de-ouro.jpg',
                         'http://imaginarium.vteximg.com.br/arquivos/ids/2096176/Garrafa-termica-harry-potter-pomo-de-ouro.jpg',
                         'http://imaginarium.vteximg.com.br/arquivos/ids/2096177/Garrafa-termica-harry-potter-pomo-de-ouro.jpg'
                    ],
                    description: 'Pra ir atrás do pomo de ouro e de várias conquistas: Garrafa Térmica Hp Pomo de Ouro! Com capacidade para 470 ml, esta garrafa incrivelmente dourada conserva suas bebidas quentes por até 8 horas e as bebidas geladas por até 18 horas. Ideal para levar o café quentinho pro dia a dia ou a água geladinha (pra tomar após um joguinho de quadribol). Além disso acompanha um pingente com as asas do pomo, pra te levar longe! Obs.: a temperatura do líquido pode variar de acordo com a temperatura externa do ambiente. Atenção: não coloque o produto na geladeira ou no congelador. Choques ou quedas podem danificá-lo. Cuidado ao consumir bebidas extremamente quentes. Para evitar que o líquido vaze, certifique-se sempre de que a tampa está devidamente fechada antes de carregar o produto.'
               }
          }
     },
}
</script>
