import { ReactNode } from 'react'

export type TRoute = {
  id: number
  name: string
  path: string
  component: ReactNode
}

export enum PublicRouteNames {
  HOME = 'Home',
  ABOUT = 'About',
  NOTFOUND = 'Not Found',
  ACTIONS = 'Actions',
  CONTACT = 'Contact',
  PRODUCTS = 'Products',
  LOGIN = 'Login'
}

export enum ROUTE {
  'HOME' = '/',
  'ABOUT' = '/about',
  'NOTFOUND' = '*',
  'ACTIONS' = '/actions',
  'PRODUCTS' = '/produts',
  'CONTACTS' = '/contact',
  'LOGIN' = '/login'
}
