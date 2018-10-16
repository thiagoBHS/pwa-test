<template>
     <section class="espec__produto--wrapper" :id="produto.codigo + '-espec_section'">
          <div class="container">
               <div class="row">
                    <!-- slider img -->
                    <div class="col-12 col-md-6">
                         <!-- <div class="row">
                              <div class="col-12">
                                   <swiper/>
                              </div>
                         </div> -->
                         <div class="row">
                              <div class="col-12">
                                   <img :src="produto.img" alt="">
                              </div>
                         </div>
                    </div>
                    <div class="col-12 col-md-6">

                         <!-- NOME -->
                         <div class="row">
                              <div class="col-12">
                                   <h3 class="espec__produto--name">{{ produto.nome }}</h3>
                              </div>
                         </div>

                         <!-- STAR RATE & VALORES -->
                         <div class="row">
                              <div class="col">
                                   <div class="espec__produto--star__rate">
                                        <div><i v-for="star in getStars" :key="star.id" :class="star"></i></div>
                                        <span>Baseado em {{ produto.star.avaliation }} avaliações</span>
                                   </div>
                              </div>
                              <div class="col-auto">
                                   <div class="espec__produto--preco">
                                        <p class="espec__produto--preco--de">R$ {{ produto.preco.de }}</p>
                                        <p class="espec__produto--preco--por">R$ {{ produto.preco.por }}</p>
                                   </div>
                              </div>
                         </div>

                         <!-- Description -->
                         <div class="row">
                              <div class="col-12">
                                   <p class="espec__produto--descricao"
                                        :class="{ 'descricao--open' : descriptionIsOpen }">
                                        {{ produto.description }}
                                   </p>
                                   <button class="espec__produto--ver__mais" 
                                        @click="descriptionIsOpen = !descriptionIsOpen">
                                        ver mais
                                   </button>
                              </div>
                         </div>

                         <!-- SWITCH : COMENTARIO & DETALHES -->
                         <button class="espec__produto--info__switcher" @click="commentIsActive = !commentIsActive">
                              <div class="row no-gutters">
                                   <div class="col-6">
                                        <div class="info__switcher--pill" :class="{ 'pill--ativo' : commentIsActive }" >
                                             Comentario
                                        </div>
                                   </div>
                                   <div class="col-6">
                                        <div class="info__switcher--pill" :class="{ 'pill--ativo' : !commentIsActive }">
                                             Detalhes
                                        </div>
                                   </div>
                              </div>
                         </button>

                         <!-- COMENTARIO -->
                         <div class="espec__produto--comentario--wrapper" v-show="commentIsActive">
                              <div class="row">
                                   <div class="col-12">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi autem laboriosam eaque, tempore sed error iusto ipsam doloribus atque, amet at ullam velit deserunt repellat. Sequi asperiores unde quod, tempore nostrum quisquam quae. Eaque, exercitationem.
                                   </div>
                              </div>
                         </div>

                         <!-- DETALHE -->
                         <div class="espec__produto--detalhes--wrapper" v-show="!commentIsActive">
                              <div class="row">
                                   <div class="col-5"><p class="detalhes--label">label</p></div>
                                   <div class="col"><p class="detalhes--value">Valor da variavel label</p></div>
                                   <div class="col-5"><p class="detalhes--label">label</p></div>
                                   <div class="col"><p class="detalhes--value">Valor da variavel label</p></div>
                                   <div class="col-5"><p class="detalhes--label">label</p></div>
                                   <div class="col"><p class="detalhes--value">Valor da variavel label</p></div>
                              </div>
                         </div>

                         <!-- ADICIONAR AO CARRINHO :: PC -->
                         <div class="buy__button--wrapper--pc d-none d-md-block">
                              <div class="container">
                                   <div class="row">
                                        <div class="col-4">
                                             <input class="buy__button--qntd" type="number" name="" id="">
                                        </div>
                                        <div class="col">
                                             <button class="buy__button--btn">
                                                  <i class="fas fa-shopping-cart"></i>
                                                  adicionar ao carrinho
                                                  </button>
                                             </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <!-- ADICIONAR AO CARRINHO :: MOBILE -->
          <section class="buy__button--wrapper--mob d-md-none" :class="{ 'buy__is__visible' : buySectionIsVisible }">
               <div class="container">
                    <div class="row small--gutter">
                         <div class="col-auto">
                              <!-- <input class="buy__button- -qntd" type="number" name="" id="" v-model="productQntd"> -->
                              <!-- <select name="" id="" class="buy__button- -qntd"> -->
                              <label :for="'select-qnt-' + produto.name" class="buy__button--qntd">
                                   <select name="" :id="'select-qnt-' + produto.name">
                                        <option :value="productQntd">1</option>
                                        <option :value="productQntd">2</option>
                                        <option :value="productQntd">3</option>
                                        <option :value="productQntd">4</option>
                                        <option :value="productQntd">5</option>
                                        <option :value="productQntd">6</option>
                                        <option :value="productQntd">7</option>
                                        <option :value="productQntd">8</option>
                                        <option :value="productQntd">9</option>
                                        <option :value="productQntd">10</option>
                                   </select>
                                   <i class="fas fa-caret-down"></i>
                              </label>
                         </div>
                         <div class="col">
                              <button class="buy__button--btn">
                                   <i class="fas fa-shopping-cart"></i>
                                   adicionar ao carrinho
                              </button>
                         </div>
                    </div>
               </div>
          </section>
          <!-- <span class="viewport-resposta">
               {{ viewSection }}
          </span> -->
     </section>
</template>

<script>

export default {
     props: ['produto'],
     
     data() {
          return {
               descriptionIsOpen: false,
               commentIsActive: true,
               productQntd: 1,
               viewSection: false,
               buySectionIsVisible: false
          }
     },
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
     },
     methods: {
          isInViewport (elem) {
               var bounding = elem.getBoundingClientRect();

               console.log('top ',bounding.top ,', bottom: ', bounding.bottom);
               
               return (
                    bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight) ||
                    bounding.top <= 0 && bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight) ||
                    bounding.bottom >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) //REVER

                    /*

                         1) top: 0 <= top <= window.innerHeight /////&& bottom > window.innerHeight

                         2) top <= 0 && bottom >= window.innerHeight

                         3) bottom: window.innerHeight >= bottom >= 0 ////&& top <= 0


                    */

               )
          },
          buySection() {
               let section = document.querySelector('#' + this.produto.codigo + '-espec_section')
               
               this.buySectionIsVisible = this.isInViewport(section)

               // console.log(this.isInViewport(section));
               // console.log(this.buySectionIsVisible);
     
               // if (this.isInViewport(section)) this.buySectionIsVisible = true
               // else this.buySectionIsVisible = true
          },
     },
     ready() {
          this.buySection()
     },
     created () {
          window.addEventListener('scroll', this.buySection);
     },
     destroyed () {
          window.removeEventListener('scroll', this.buySection);
     }
}
</script>


<style>
     .viewport-resposta {
          display: block;
          position: fixed;
          top: 0;
          left: 10px;
          background: black;
          padding: 10px;
          color: white;
          font-weight: bold;
          z-index: 100;
     }
     .espec__produto--wrapper {
          background: gray;
          padding: 18px 0 0;
     }
     .espec__produto--wrapper img {
          width: 100%;
     }

     /* Preço */
          .espec__produto--wrapper .espec__produto--preco{
               text-align: right;
          }
          .espec__produto--wrapper .espec__produto--preco--de{
               font-size: 18px;
               text-decoration: line-through;
               margin: 0;
          }
          .espec__produto--wrapper .espec__produto--preco--por {
               font-size: 21px;
               font-weight: 800;
          }
     /* // Preço */

     /* Descrição */
          .espec__produto--wrapper .espec__produto--descricao {
               font-size: 16px;
               line-height: 28px;
               height: 112px;
               overflow: hidden;
               transition: height .4s;
          }
          .espec__produto--wrapper .espec__produto--descricao.descricao--open {
               height: 100%;
          }
     /* // Descrição */

     /* Comentar & Detalhes :: Switcher */
          .espec__produto--info__switcher {
               background: none;
               border: 2px solid #000;
               border-radius: 4px;
               width: 100%;
          }
          .espec__produto--info__switcher .info__switcher--pill{
               padding: 9px 0;
               transition: background .4s;
          }
          .espec__produto--info__switcher .info__switcher--pill.pill--ativo{
               background: #000;
               color: #fff;
          }
     /* // Comentar & Detalhes :: Switcher */

     /* Comentar & Detalhes :: Detalhes */
          .espec__produto--detalhes--wrapper {
               margin: 18px 0;
          }
          .espec__produto--detalhes--wrapper .detalhes--label {
               font-size: 12px;
               font-weight: 800;
               text-align: right;
               line-height: 18px;
          }
          .espec__produto--detalhes--wrapper .detalhes--value {
               font-size: 14px;
               line-height: 18px;

          }
     /* Adicionar ao Carrinho :: Mobile */
     .buy__button--wrapper--mob.buy__is__visible {
          position: fixed;
          bottom: 0;
     }
     .buy__button--wrapper--mob {
          background: #333;
          padding: 3px 0;
     }
     .buy__button--wrapper--mob .small--gutter {
          margin-right: -9px;
          margin-left: -9px;
     }
     .buy__button--wrapper--mob .small--gutter [class*="col"] {
          padding-right: 9px;
          padding-left: 9px;
    }
     .buy__button--wrapper--mob .buy__button--qntd {
          width: 63px;
          padding: 6px 9px;
          background: white;
          margin: 0;
     }
     .buy__button--wrapper--mob .buy__button--qntd select {
          margin-right: -10px;
          width: 45px;
     }
     .buy__button--wrapper--mob .buy__button--btn {
          background: #ffd000;
          width: 100%;
          border: none;
          border-radius: 2px;
          padding: 6px 0;
     }
     .buy__button--wrapper--mob .buy__button--btn i {
          margin-right: 9px;
     }
     
</style>

