import { Privatelayout } from '@/layouts'
import { TRoute } from '../publicRoutes'
import { PRIVATE_ROUTE, PrivateRouteNames } from './route.enums'
import { Account, Dashboard, History } from '@/containers'
import { PRIVATE_META } from '../metaRoutes'

export const PRIVATE_ROUTES: TRoute[] = [
  {
    id: 10,
    name: PrivateRouteNames.DASHBOARD,
    path: PRIVATE_ROUTE.DASHBOARD,
    component: (
      <Privatelayout {...PRIVATE_META[PRIVATE_ROUTE.DASHBOARD]}>
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
