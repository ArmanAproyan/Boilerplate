import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Account.module.scss'

export const Account = () => {
  const userData = localStorage.getItem('authentication')
  const { i18n } = useTranslation()

  const { userName } = JSON.parse(userData)

  const { cn } = useClassNames('title', styles)

  return (
    <h1 className={cn()}>
      {i18n.t('AccauntPage')} {userName}
    </h1>
  )
}
