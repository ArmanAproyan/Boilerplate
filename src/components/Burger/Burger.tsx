import { Fragment, useState } from 'react'
import { useClassNames, useLockBodyScroll } from '@/hooks'
import { BURGER_LINE_COUNT } from './Burger.constant'

import styles from './Burger.module.scss'
import { OverLay } from '../Overlay'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  const { cn } = useClassNames('navbar', styles)

  useLockBodyScroll(isOpen)

  return (
    <Fragment>
      <nav className={cn()}>
        <div className={cn('__burger')} onClick={toggleMenu}>
          {Array(BURGER_LINE_COUNT)
            .fill(null)
            .map((_, i) => {
              return <div key={i} className={cn('__burger__line')} />
            })}
        </div>
        <span className={cn('__burger__text')} onClick={toggleMenu}>
          Menu
        </span>
      </nav>
      <OverLay isOpen={isOpen} onClose={toggleMenu} />
    </Fragment>
  )
}
