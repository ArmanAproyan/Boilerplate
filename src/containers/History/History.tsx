import { useClassNames } from '@/hooks'

import styles from './History.module.scss'

export const History = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to History</h1>
}
