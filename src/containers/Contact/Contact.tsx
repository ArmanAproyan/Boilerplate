import { useClassNames } from '@/hooks'

import styles from './Contact.module.scss'

export const Contact = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to Contact</h1>
}
