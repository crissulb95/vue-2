// import isAuthenticatedGuard from '../../../router/auth-guard'

const routes = [
  {
    path: '/',
    redirect: '/daybook'
  },
  {
    path: '/daybook',
    name: 'daybook',
    // beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "DaybookLayout" */ '@/modules/daybook/layout/DayBookLayout'
      ),
    children: [
      {
        path: '',
        name: 'daybook-home',
        component: () =>
          import(
            /* webpackChunkName: "CharactersPage" */ '@/modules/daybook/views/Home'
          )
      }
    ]
  }
]

export default routes
