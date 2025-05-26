import { useClassNames } from '@/hooks'

import styles from './Dashboard.module.scss'

export const Dashboard = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to Dashboard</h1>
}
