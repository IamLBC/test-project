import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Page2 from '@/components/Page2'
import Page1 from '@/components/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'HomePage',
    },
    {
      path: '/HomePage',
      component: HomePage,
      children: [{
        path: '/Page2',
        component: Page2,
      }, {
        path: '/Page1',
        component: Page1,
      }]
    }
  ]
})
