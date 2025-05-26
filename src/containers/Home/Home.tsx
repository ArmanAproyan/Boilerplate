import { useClassNames } from '@/hooks'

import styles from './Home.module.scss'

export const Home = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to Home Page</h1>
}
