import { useClassNames } from '@/hooks'

import styles from './styles.module.scss'

export const About = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to About</h1>
}
