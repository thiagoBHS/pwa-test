<template>
     <div class="card_produto--wrapper">
          
          <div class="row no-gutters">
               <div class="col-5 col-md-12">

                    <div class="card_produto--tags">
                         <div class="row no-gutters justify-content-between">
                              <div class="col-auto">
                                   <div class="card_produto--disconto">{{ getPercentage }}%</div>
                              </div>
                              <div class="col-auto">
                                   <div class="card_produto--disconto">3 und</div>
                              </div>
                              <!-- <div class="col-auto">{{ getStorage }}%</div> -->
                         </div>
                    </div>

                    <img class="card_produto--image" :src="produto.img" alt="imagem de produto">
               </div>
               <div class="col col-md-12">
                    <div class="card_produto--direito">
                         <p class="card_produto--nome">{{produto.nome}}</p>
                         <span class="card_produto--stars">
                              <i v-for="star in getStars" :key="star.id" :class="star"></i>
                              <span> {{ produto.star.avaliation }}</span>
                         </span>
                         <p class="card_produto--preço card_produto--preço--de">R$ {{produto.preco.de}}</p>
                         <p class="card_produto--preço card_produto--preço--por">R$ {{produto.preco.por}}</p>
                         <button class="card_produto--btn_comprar">Adicionar ao Carrinho</button>
                    </div>
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
          },
          getPercentage() {
               let desconto =  this.produto.preco.por / this.produto.preco.de   * 100
               return desconto.toFixed(0)
          }
     }
}
</script>

<style>
     .card_produto--wrapper {
          padding: 5px;
          margin: 9px 0;

     }
     .card_produto--wrapper .card_produto--direito {
          padding-left: 18px;
     }
     .card_produto--wrapper .card_produto--tags {
          margin: 6px 0 -6px;
     }
     .card_produto--wrapper .card_produto--disconto {
          background: #000;
          line-height: 18px;
          color: #fff;
          padding: 3px 6px;
          margin-bottom: -29px;
          position: relative;
          z-index: 1;
     }
     .card_produto--wrapper .card_produto--image {
          width: 100%;
          height: auto;
     }
     .card_produto--wrapper .card_produto--nome {
          margin-bottom: 3px;
          line-height: 16px;
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
     /* Medium devices (tablets, 768px and up) */
     @media (min-width: 768px) { 
          .card_produto--wrapper {
               cursor: pointer;
          }
          .card_produto--wrapper .card_produto--btn_comprar {
               opacity: 0;
               transition: opacity .3s;
               
          }
          .card_produto--wrapper:hover .card_produto--btn_comprar{
               opacity: 1;
          }
     }

</style>


