import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import HeaderHomePage from '../layout/HeaderHomePage.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: {
      header: HeaderHomePage,
      sideBar: '',
      default: HomePage,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
