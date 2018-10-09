<template>
     <div class="card_produto--wrapper">
          <div class="row">
               <div class="col-5">
                    <img class="card_produto--image" :src="produto.img" alt="imagem de produto">
               </div>
               <div class="col">
                    <p class="card_produto--nome">{{produto.nome}}</p>
                    <span class="card_produto--stars">
                         <i v-for="star in getStars" :key="star.id" :class="star"></i>
                         <span> {{ produto.star.avaliation }}</span>
                    </span>
                    <p class="card_produto--preço card_produto--preço--de">R$ {{produto.preço.de}}</p>
                    <p class="card_produto--preço card_produto--preço--por">R$ {{produto.preço.por}}</p>
                    <button class="card_produto--btn_comprar">Adicionar ao Carrinho</button>
               </div>
          </div>

     </div>
</template>

<script>
export default {
     name: 'card-produto',
     props: ['produto'],
     computed: {
          getStars() {
               // Round to nearest half
               let rating = Math.round(this.produto.star.rate * 2) / 2,
               output = []

               // Append all the filled whole stars
               for (var i = rating; i >= 1; i--) output.push('fas fa-star')

               // If there is a half a star, append it
               if (i == .5) output.push('fas fa-star-half-alt')

               // Fill the empty stars
               for (let i = (5 - rating); i >= 1; i--) output.push('far fa-star')

               return output
          }
     }
}
</script>

<style>
     .card_produto--wrapper {
          padding: 5px;
     }
     .card_produto--wrapper .card_produto--image {
          width: 100%;
          height: auto;
     }
     .card_produto--wrapper .card_produto--nome {
          margin-bottom: 3px;
     }
     .card_produto--wrapper .card_produto--stars {
          font-size: 11px;
     }
     
     .card_produto--wrapper .card_produto--preço--de{
          font-size: 12px;
          text-decoration: line-through;
          margin: 0;
     }
     .card_produto--wrapper .card_produto--preço--por {
          font-size: 15px;
          font-weight: 700;
     }
     .card_produto--wrapper .card_produto--btn_comprar{
          background: #ccc;
          padding: 9px;
          width: 100%;
          border-radius: 3px;
     }

</style>


