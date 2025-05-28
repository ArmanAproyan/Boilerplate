import { useNavigate } from 'react-router-dom'
import { GucciLogo } from '@/assets/icons'
import { Burger } from 'components'
import { ROUTE } from '@/routes'
import { useClassNames } from '@/hooks'

import styles from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()

  const { cn } = useClassNames('header', styles)

  return (
    <header className={cn()}>
      <div className={cn('__logo')}>
        <GucciLogo onClick={() => navigate(ROUTE.HOME)} className={cn('__logo')} />
      </div>
      <div className={cn('__rightSection')}>
        <Burger />
      </div>
    </header>
  )
}
