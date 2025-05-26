import { useNavigate } from 'react-router-dom'
import { GucciLogo } from '@/assets/icons'
import { Burger } from 'components'
import { ROUTE } from '@/routes'
import { useAuthenticate, useClassNames } from '@/hooks'
import styles from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()
  const [logInfo, handleAuthToggle] = useAuthenticate()

  const { cn } = useClassNames('header', styles)

  return (
    <header className={cn()}>
      <div className={cn('__logo')}>
        <GucciLogo onClick={() => navigate(ROUTE.HOME)} className={cn('__logo')} />
      </div>
      <div className={cn('__other')}>
        <span className={cn('__login')} onClick={handleAuthToggle}>
          {logInfo}
        </span>
        <Burger />
      </div>
    </header>
  )
}
