import { NavList } from 'components'
import { TOverlay } from './Overlay.types'
import { useClassNames } from '@/hooks'
import classNames from 'classnames'

import styles from './OverLay.module.scss'

export const OverLay = ({ isOpen, onClose }: TOverlay) => {
  const { cn } = useClassNames('header', styles)

  return (
    <>
      <div
        className={classNames(styles.blur, { [styles.blur_active]: isOpen })}
        onClick={onClose}
      />

      <div className={classNames(styles.overlay, { [styles.active]: isOpen })}>
        <div className={cn()}>
          <div onClick={onClose} className={cn('__close')}>
            <span className={cn('__close__icone')}>x</span>
          </div>
        </div>
        <div className={cn('__nav')}>
          <NavList onClose={onClose} />
        </div>
      </div>
    </>
  )
}
