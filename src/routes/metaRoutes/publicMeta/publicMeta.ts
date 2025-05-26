import { ROUTE } from '@/routes/publicRoutes/route.enums'

export const PUBLIC_META = {
  [ROUTE.HOME]: {
    title: 'Home',
    description: 'Welcome to homepage'
  },
  [ROUTE.ABOUT]: {
    title: 'About Us',
    description: 'About our company'
  },
  [ROUTE.ACTIONS]: {
    title: 'Actions',
    description: 'Our latest actions'
  },
  [ROUTE.CONTACTS]: {
    title: 'Contact',
    description: 'Contact us page'
  },
  [ROUTE.PRODUCTS]: {
    title: 'Products',
    description: 'Browse our products'
  },
  [ROUTE.LOGIN]: {
    title: 'Login',
    description: 'Login to your account'
  },
  [ROUTE.NOTFOUND]: {
    title: 'Not Found',
    description: 'Page not found'
  }
}
