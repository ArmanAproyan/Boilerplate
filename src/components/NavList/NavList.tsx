import { useNavigate } from 'react-router-dom'
import { TNavlist } from './NavList.types'
import { PUBLIC_ROUTES, PRIVATE_ROUTES, PublicRouteNames, TPath } from '@/routes'
import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './NavList.module.scss'

export const NavList = ({ onClose }: TNavlist) => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

  const { cn } = useClassNames('nav', styles)

  const handleClick = (path: TPath) => {
    onClose()
    navigate(path)
  }

  const visibleRoutes = PUBLIC_ROUTES.filter(
    ({ name }) => name !== PublicRouteNames.LOGIN && name !== PublicRouteNames.NOTFOUND
  ).concat(PRIVATE_ROUTES)

  return (
    <nav>
      <ul className={cn()}>
        {visibleRoutes.map(({ path, name, id }) => (
          <li className={cn('__li')} key={id}>
            <span className={cn('__item')} onClick={() => handleClick(path)}>
              {i18n.t(name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
