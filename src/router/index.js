// Setting up router functions
import { createWebHistory, createRouter } from "vue-router"


// Importing views
import AppHome from "@/views/AppHome.vue"
import PageNotFound from '@/views/PageNotFound.vue'
import AppAbout from '@/views/AppAbout.vue'

import ShopSingle from '@/views/ShopSingle.vue'
import ShopAll from '@/views/ShopAll.vue'

import ShoppingCart from '@/views/ShoppingCart.vue'
import ThankYou from '@/views/ThankYou.vue'
import ContactInfo from '@/views/ContactInfo.vue'

import UserProfile from '@/views/UserProfile.vue'
import AccountInfo from '@/views/AccountInfo.vue'
import UserOrders from '@/views/UserOrders.vue'
import UserAdresses from '@/views/UserAdresses'
import UserCards from '@/views/UserCards'

import AppLogin from '@/views/AppLogin.vue'
import AppRegister from '@/views/AppRegister.vue'


const routes = [
    {
      path: "/",
      name: "AppHome",
      component: AppHome,
    },
    {
      path: '/about',
      name: "AppAbout",
      component: AppAbout,
    },
    {
      path: '/shop-all',
      name: "ShopAll",
      component: ShopAll,
    },
    {
      path: '/shop-single',
      name: "ShopSingle",
      component: ShopSingle,
    },
    {
      path: '/cart',
      name: "ShoppingCart",
      component: ShoppingCart,
    },
    {
      path: '/thankyou',
      name: "ThankYou",
      component: ThankYou,
    },
    {
      path: '/contact',
      name: "ContactInfo",
      component: ContactInfo,
    },
    {
      path: '/profile',
      name: "UserProfile",
      component: UserProfile,
    },
    {
      path: '/account-info',
      name: "AccountInfo",
      component: AccountInfo,
    },
    {
      path: '/login',
      name: "AppLogin",
      component: AppLogin,
    },
    {
      path: '/register',
      name: "AppRegister",
      component: AppRegister,
    },
    {
      path: '/orders',
      name: "UserOrders",
      component: UserOrders,
    },
    {
      path: '/cards',
      name: "UserCards",
      component: UserCards,
    },
    {
      path: '/adresses',
      name: "UserAdresses",
      component: UserAdresses,
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router