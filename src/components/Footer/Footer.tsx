import { useClassNames } from '@/hooks'
import { Languages } from '../Languages'

import styles from './Footer.module.scss'

export const Footer = () => {
  const { cn } = useClassNames('footer', styles)

  return (
    <footer className={cn()}>
      <Languages />
    </footer>
  )
}
