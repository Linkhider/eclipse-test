import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'currencies',
      component: () => import('../views/Currencies')

    },
    {
      path: '/converter',
      name: 'Converter',
      component: () => import('../views/Converter'),
      params: true
    }
  ]
})