import { Navigate } from 'react-router-dom'
import { Header, Footer, PageHelmet } from 'components'
import { ROUTE } from '@/routes'
import { useClassNames } from '@/hooks'
import { PrivateLayoutProps } from './PrivateLayout.types'

import styles from './PrivateLayout.module.scss'

export const Privatelayout = ({ title, description, children }: PrivateLayoutProps) => {
  const { cn } = useClassNames('layout', styles)

  if (!localStorage.getItem('token')) {
    return <Navigate to={ROUTE.LOGIN} />
  }

  return (
    <div className={cn()}>
      <PageHelmet title={title} description={description} />
      <Header />
      <main className={cn('__main')}>{children}</main>
      <Footer />
    </div>
  )
}
