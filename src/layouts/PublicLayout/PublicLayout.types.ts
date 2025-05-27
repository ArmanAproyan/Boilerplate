import { PropsWithChildren } from 'react'

type PublicLayoutPartialProps = Partial<{
  hasHeaderFooter: boolean
}>

export type PublicLayoutProps = {
  title: string
  description: string
} & PublicLayoutPartialProps &
  PropsWithChildren
