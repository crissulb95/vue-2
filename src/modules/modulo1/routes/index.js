import isAuthenticatedGuard from '../../../router/auth-guard'

const routes = [
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DBZLayout" */ '@/modules/modulo1/layout/DBZLayout'
      ),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () =>
          import(
            /* webpackChunkName: "CharactersPage" */ '@/modules/modulo1/pages/CharactersPage'
          )
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ '@/modules/modulo1/pages/AboutPage'
          )
      },
      {
        path: '',
        redirect: { name: 'dbz-characters' }
      }
    ]
  }
]

export default routes
