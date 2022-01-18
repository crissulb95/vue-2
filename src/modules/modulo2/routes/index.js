// import { AboutPage, DetailPage, ListPage, PokemonPage } from '../pages'

const routes = [
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ '@/modules/modulo2/layout/PokemonLayout'
      ),
    children: [
      {
        path: '',
        name: 'pokemon-home',
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ '@/modules/modulo2/pages/ListPage'
          )
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '@/modules/modulo2/pages/AboutPage'
          )
      },
      {
        path: 'by-id/:id',
        name: 'pokemon-id',
        component: () =>
          import(
            /* webpackChunkName: "DetailPage" */ '@/modules/modulo2/pages/DetailPage'
          ),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) && id > 0 ? { id: 1 } : { id }
        }
      },
      {
        path: 'quiz',
        name: 'pokemon-quiz',
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ '@/modules/modulo2/pages/PokemonPage/PokemonPage'
          )
      },
      {
        path: '',
        redirect: { name: 'about' }
      }
    ]
  }
]

export default routes
