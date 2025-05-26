import { useNavigate } from 'react-router-dom'
import { TNavlist } from './NavList.types'
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '@/routes'
import { useClassNames } from '@/hooks'

import styles from './NavList.module.scss'

export const NavList = ({ onClose }: TNavlist) => {
  const { cn } = useClassNames('menu', styles)

  const navigate = useNavigate()
  const handleClick = (path: string) => {
    onClose()
    navigate(path)
  }

  const visibleRoutes = PUBLIC_ROUTES.filter(
    (route) => route.name !== 'Login' && route.name !== 'Not Found'
  ).concat(PRIVATE_ROUTES)

  return (
    <ul className={cn()}>
      {visibleRoutes.map(({ path, name, id }) => (
        <li className={cn('__li')} key={id}>
          <span className={cn('__text')} onClick={() => handleClick(path)}>
            {name}
          </span>
        </li>
      ))}
    </ul>
  )
}
