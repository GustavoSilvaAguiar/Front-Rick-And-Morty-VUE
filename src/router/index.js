import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import homePageRoutes from '../modules/home/home.routes.js'
import cardsViewRoutes from '../modules/cards/cards.routes.js'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
    children: [
      ...homePageRoutes,
      ...cardsViewRoutes
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
