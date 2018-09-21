import Vue from 'vue'
import Router from 'vue-router'

import { testarr } from '@/pages/liaotian/router.js'

import home from '@/pages/home'
import page2 from '@/pages/page2'
import page1 from '@/pages/page1'
import grid from '@/pages/grid'
import liaotian from '@/pages/liaotian/liaotian'
import elementTable from '@/pages/elementTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home/page1'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [{
        path: '/home/page2',
        name: 'page2',
        component: page2
      }, {
        path: '/home/page1',
        name: 'page1',
        component: page1
      }]
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/elementTable',
      name: 'elementTable',
      component: elementTable
    },
    {
      path: '/liaotian',
      name: 'liaotian',
      redirect: '/liaotian/caowei',
      component: liaotian,
      children: testarr
    }
  ]
})
