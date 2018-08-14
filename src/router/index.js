import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import page2 from '@/pages/page2'
import page1 from '@/pages/page1'
import grid from '@/pages/grid'
import elementTable from '@/pages/elementTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      component: home,
      children: [{
        path: '/page2',
        component: page2,
      }, {
        path: '/page1',
        component: page1,
      }]
    },
    {
      path: '/grid',
      component: grid,
    },
    {
      path: '/elementTable',
      component: elementTable,
    }
  ]
})
