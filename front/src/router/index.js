// Setting up router functions
import { createWebHistory, createRouter } from "vue-router"

const routes = [

    // ----------------- GLOBAL VIEWS ----------------- //
    {
      path: "/",
      alias: ['/home', '/index'],
      name: "AppHome",
      component: () => import(/* webpackChunkName: "AppHome" */ '@/views/AppHome')
    },
    {
      path: '/about',
      name: "AppAbout",
      component: () => import(/* webpackChunkName: "AppAbout" */ '@/views/AppAbout')
    },
    {
      path: '/shop-all',
      name: "ShopAll",
      component: () => import(/* webpackChunkName: "ShopAll" */ '@/views/ShopAll')
    },
    {
      path: '/shop-single/:productId',
      name: "ShopSingle",
      component: () => import(/* webpackChunkName: "ShopSingle" */ '@/views/ShopSingle')
    },
    {
      path: '/contact',
      name: "ContactInfo",
      component: () => import(/* webpackChunkName: "ContactInfo" */ '@/views/ContactInfo')
    },
    {
      path: '/login-register',
      alias: ['/login', '/signin', '/signup', '/register'],
      name: "LoginRegister",
      component: () => import(/* webpackChunkName: "LoginRegister" */ '@/views/LoginRegister')
    },

    // ----------------- USER VIEWS ----------------- //
    {
      path: '/cart',
      name: "ShoppingCart",
      component: () => import(/* webpackChunkName: "ShoppingCart" */ '@/views/ShoppingCart'),
      meta: { requiresLogin: true }
    },
    {
      path: '/thankyou',
      name: "ThankYou",
      component: () => import(/* webpackChunkName: "ThankYou" */ '@/views/ThankYou'),
      meta: { requiresLogin: true }
    },

    {
      path: '/profile',
      name: "UserProfile",
      component: () => import(/* webpackChunkName: "UserProfile" */ '@/views/UserProfile'),
      meta: { requiresLogin: true }
    },


    // ----------------- ADMIN VIEWS ----------------- //

    {
      path: '/admin-view',
      alias: ['/adm', '/admInfo'],
      name: "AdminView",
      component: () => import(/* webpackChunkName: "AdminView" */ '@/views/AdminView'),
      meta: { requiresLogin: true }
    },

    // ----------------- ERROR 404: PAGE NOT FOUND ----------------- //
    // Error 404 must always be last!
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: () => import(/* webpackChunkName: "PageNotFound" */ '@/views/PageNotFound')
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router