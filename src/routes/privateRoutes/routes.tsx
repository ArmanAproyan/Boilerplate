import { Privatelayout } from '@/layouts'
import { PRIVATE_ROUTE } from './route'
import { TRoute } from '@/routes'
import { PRIVATE_META } from '../metaRoutes'
import { PrivateRouteNames } from './route'
import { Account, Dashboard, History } from '@/containers'

export const PRIVATE_ROUTES: TRoute[] = [
  {
    id: 10,
    name: PrivateRouteNames.DASHBOARD,
    path: PRIVATE_ROUTE.DASHBORD,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.DASHBORD]}>
        <Dashboard />
      </Privatelayout>
    )
  },
  {
    id: 11,
    name: PrivateRouteNames.ACCOUNT,
    path: PRIVATE_ROUTE.ACCOUNT,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.ACCOUNT]}>
        <Account />
      </Privatelayout>
    )
  },
  {
    id: 12,
    name: PrivateRouteNames.HISTORY,
    path: PRIVATE_ROUTE.HISTORY,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.HISTORY]}>
        <History />
      </Privatelayout>
    )
  }
]
