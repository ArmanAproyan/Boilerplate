import { NavList } from 'components'
import { TOverlay } from './Overlay.types'
import { useAuthenticate, useClassNames } from '@/hooks'
import classNames from 'classnames'

import styles from './OverLay.module.scss'

export const OverLay = ({ isOpen, onClose }: TOverlay) => {
  const { cn } = useClassNames('header', styles)
  const [logInfo, handleAuthToggle] = useAuthenticate()

  return (
    <>
      <div
        className={classNames(styles.blur, { [styles.blur_active]: isOpen })}
        onClick={onClose}
      />

      <div className={classNames(styles.overlay, { [styles.active]: isOpen })}>
        <div className={cn()}>
          <div onClick={onClose} className={cn('__close')}>
            <span className={cn('__close__icon')}>x</span>
          </div>
        </div>
        <div className={cn('__nav')}>
          <NavList onClose={onClose} />
        </div>
        <div className={styles.footer}>
          <div
            className={styles.footer__login}
            onClick={() => {
              handleAuthToggle()
              onClose()
            }}
          >
            {logInfo}
          </div>
        </div>
      </div>
    </>
  )
}
