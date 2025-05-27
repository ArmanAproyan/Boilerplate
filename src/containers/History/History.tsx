import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './History.module.scss'

export const History = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('HistoryPage')}</h1>
}
