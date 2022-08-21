import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import homePageRoutes from '../modules/home/home.routes.js'
import cardsViewRoutes from '../modules/cards/cards.routes.js'
import cardsDetailViewRoutes from '../modules/cardsDetail/cardsDetail.routes.js'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
    children: [
      ...homePageRoutes,
      ...cardsViewRoutes,
      ...cardsDetailViewRoutes
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
