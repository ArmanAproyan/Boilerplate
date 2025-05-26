import { useClassNames } from '@/hooks'
import { useNavigate } from 'react-router-dom'

import styles from './NotFound.module.scss'

export const NotFound = () => {
  const { cn } = useClassNames('notFound', styles)

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <section className={cn()}>
      <div className={cn('__content')}>
        <h1 className={cn('__content__title')}>404</h1>
        <p className={cn('__content__message')}>Page not found</p>
        <div className={cn('__content__button')} onClick={navigateHome}>
          Go back home
        </div>
      </div>
    </section>
  )
}
