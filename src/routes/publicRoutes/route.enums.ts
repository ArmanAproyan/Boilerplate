import { ReactNode } from 'react'
import { PRIVATE_ROUTE } from '../privateRoutes'

export type TPath = ROUTE | PRIVATE_ROUTE

export type TRoute = {
  id: number
  name: string
  path: TPath
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
