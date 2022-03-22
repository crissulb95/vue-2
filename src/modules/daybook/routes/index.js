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
        name: 'no-entry',
        component: () =>
          import(
            /* webpackChunkName: "No Entry" */ '@/modules/daybook/components/NoEntrySelected'
          )
      },
      {
        path: ':id',
        name: 'entry',
        component: () =>
          import(
            /* webpackChunkName: "Entry" */ '@/modules/daybook/components/EntrySelected'
          )
      }
    ]
  }
]

export default routes
