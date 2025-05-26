import { NavList } from 'components/NavList'
import { TOverlay } from './Overlay.types'
import { useClassNames } from '@/hooks'

import styles from './OverLay.module.scss'

export const OverLay = ({ isOpen, onClose }: TOverlay) => {
  const { cn } = useClassNames('header', styles)

  return (
    <>
      <div className={`${styles.blur} ${isOpen ? styles.blur_active : ''}`} onClick={onClose} />
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`}>
        <div className={cn()}>
          <div onClick={onClose} className={cn('__close')}>
            <span>x</span>
          </div>
        </div>
        <div className={cn('__nav')}>
          <NavList onClose={onClose} />
        </div>
      </div>
    </>
  )
}
