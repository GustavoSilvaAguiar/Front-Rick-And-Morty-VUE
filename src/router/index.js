import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import CardCaracter from '../@shared/components/CardCaracter.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage,
    children: [
      {
        path: 'card',
        component: CardCaracter
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
