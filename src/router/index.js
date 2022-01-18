import { createRouter, createWebHashHistory } from 'vue-router'
// import { NotFoundPage } from '../modules/shared/pages'
import modulo2 from '@/modules/modulo2/routes'
import modulo1 from '@/modules/modulo1/routes'
import daybook from '@/modules/daybook/routes'

const routes = [
  ...modulo1,
  ...modulo2,
  ...daybook,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () =>
      import(
        /* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotFoundPage'
      )
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
