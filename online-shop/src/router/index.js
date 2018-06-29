import Vue from 'vue'
import Router from 'vue-router'

import Cart from '@/pages/Cart'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'

// Admin component
import Index from '@/pages/admin/index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          comonent: Edit,
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
