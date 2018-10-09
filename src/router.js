import Vue from 'vue'
import Router from 'vue-router'
import Listas from './views/Lists__view.vue'
import Tarefas from './views/Tasks__view.vue'
import BlackFriday from './views/BlackFriday.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listas',
      component: Listas
    },{
      path: '/black_friday',
      name: 'blackFriday',
      component: BlackFriday
    },{
      path: '/:tasks',
      name: 'tarefas',
      component: Tarefas
    }
  ]
})
