import { useClassNames } from '@/hooks'

import styles from './Account.module.scss'

export const Account = () => {
  const userData = localStorage.getItem('authentication')

  const { userName } = JSON.parse(userData)

  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome {userName}</h1>
}
