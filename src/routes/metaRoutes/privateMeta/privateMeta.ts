import { PRIVATE_ROUTE } from '@/routes'

export const PRIVATE_META = {
  [PRIVATE_ROUTE.DASHBOARD]: {
    title: 'Dashboard',
    description: 'This is the dashboard'
  },
  [PRIVATE_ROUTE.ACCOUNT]: {
    title: 'Account',
    description: 'Manage your account'
  },
  [PRIVATE_ROUTE.HISTORY]: {
    title: 'History',
    description: 'View your history'
  }
}
