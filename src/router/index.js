import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
  },
  // spread/apply

  {
    path : '/contact',
    name : 'Contact',
    components: {
      default: () => import(/* webpackChunkName: "connexion" */ '../views/Contact.vue'),
    },
  },

  {
    path : '/Price',
    name : 'Price',
    components: {
      default: () => import(/* webpackChunkName: "tarif" */ '../views/Price.vue'),
    },
  },

  {
    path : '/Mentions',
    name : 'Mentions',
    components: {
      default: () => import(/* webpackChunkName: "Mentions" */ '../views/Mentions.vue'),
    },
  },
  {
    path : '/Politique',
    name : 'Politique',
    components: {
      default: () => import(/* webpackChunkName: "Politique" */ '../views/Politique.vue'),
    },
  },
  {
    path : '/Fonctionnalites',
    name : 'Fonctionnalites',
    components: {
      default: () => import(/* webpackChunkName: "Fonctionnalites" */ '../views/Fonctionnalites.vue'),
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

