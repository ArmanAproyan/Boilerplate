import { useClassNames } from '@/hooks'
import styles from './Actions.module.scss'

export const Actions = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome To Actions</h1>
}
