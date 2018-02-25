import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import AcercaDe from '@/components/AcercaDe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/acercade',
      name: 'AcercaDe',
      component: AcercaDe
    },
    
  ]
})
