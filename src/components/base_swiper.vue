<template>
     <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
               <div class="swiper-slide"
                    v-for="(slide, index) in virtualData.slides"
                    :key="index"
                    :style="{left: `${virtualData.offset}px`}"
                    >
                    {{slide}}
               </div>
               <!-- <div class="swiper-slide">slide 1</div>
               <div class="swiper-slide">slide 2</div>
               <div class="swiper-slide">slide 3</div> -->
          </div>

          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

     </div>
</template>

<script>
import Swiper from 'swiper'


export default {
     name: 'swiper',
     props: ['images'],
     data() {
          return {
               // dummy slides data
               slides: (function () {
                    var slides = [];
                    for (var i = 0; i < 5; i += 1) {
                         slides.push('Slide ' + (i + 1));
                    }
                    return slides;
               }()),
               // virtual data
               virtualData: {
                    slides: [],
               },
          }
     },
     mounted() {
          const self = this
          var swiper = new Swiper('.swiper-container', {
               // Optional parameters
               direction: 'horizontal',
               loop: true,


               virtual: {
                    slides: self.slides,
                    renderExternal(data) {
                    // assign virtual slides data
                    self.virtualData = data;
                    }
               }
          })
          swiper
     }
     
}
</script>

<style>
     .swiper-container {
          /* width: 100%; */
          width: 350px;
          height: 100px;
          
     }
     .swiper-container .swiper-slide {
          background: #444;
          height: 100px;
     }
</style>

