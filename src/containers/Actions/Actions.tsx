import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Actions.module.scss'

export const Actions = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()
  return <h1 className={cn()}>{i18n.t('ActionsPage')}</h1>
}
