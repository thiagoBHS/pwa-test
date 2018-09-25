import Vue from 'vue'
import Router from 'vue-router'
import Listas from './views/Lists__view.vue'
import Tarefas from './views/Tasks__view.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'listas',
      component: Listas
    },{
      path: '/:tasks',
      name: 'tarefas',
      component: Tarefas
    },
  ]
})
