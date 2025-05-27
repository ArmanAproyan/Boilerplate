import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Dashboard.module.scss'

export const Dashboard = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('DashboardPage')}</h1>
}
