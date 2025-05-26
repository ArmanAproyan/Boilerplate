import { useClassNames } from '@/hooks'
import { useNavigate } from 'react-router-dom'

import styles from './NotFound.module.scss'
import { ROUTE } from '@/routes'

export const NotFound = () => {
  const navigate = useNavigate()
  const { cn } = useClassNames('notFound', styles)

  const navigateToHome = () => {
    navigate(ROUTE.HOME)
  }

  return (
    <section className={cn()}>
      <div className={cn('__content')}>
        <h1 className={cn('__content__title')}>404</h1>
        <p className={cn('__content__message')}>Page not found</p>
        <div className={cn('__content__button')} onClick={navigateToHome}>
          Go back home
        </div>
      </div>
    </section>
  )
}
