import { useState } from 'react'
import { useClassNames, useLockBodyScroll } from '@/hooks'
import { OverLay } from 'components'

import styles from './Burger.module.scss'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((open) => !open)

  const { cn } = useClassNames('navbar', styles)

  useLockBodyScroll(isOpen)

  return (
    <>
      <nav className={cn()}>
        <div className={cn('__burger')} onClick={toggleMenu}>
          {Array(3)
            .fill(null)
            .map((_, i) => {
              return <div key={i} className={cn('__burger__line')}></div>
            })}
        </div>
        <span className={cn('__burger__text')} onClick={toggleMenu}>
          Menu
        </span>
      </nav>
      <OverLay isOpen={isOpen} onClose={toggleMenu} />
    </>
  )
}
