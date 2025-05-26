import { Footer, Header, PageHelmet } from 'components'
import { PropsWithChildren } from 'react'
import { useClassNames } from '@/hooks'

import styles from './Layout.module.scss'
import { PublicLayoutProps } from './PublicLayout.types'

export const PublicLayout = ({
  title,
  description,
  showHeaderFooter = true,
  children
}: PropsWithChildren<PublicLayoutProps>) => {
  const { cn } = useClassNames('layout', styles)
  return (
    <div className={cn()}>
      <PageHelmet title={title} description={description} />
      {showHeaderFooter && <Header />}
      <main className={cn('__main')}>{children}</main>
      {showHeaderFooter && <Footer />}
    </div>
  )
}
