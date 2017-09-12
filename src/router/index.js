import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Goodslist from '@/views/Goodslist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/goodslist',
      name: 'Goodslist',
      component: Goodslist
    }
  ]
})
