import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Contact.module.scss'

export const Contact = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('ContactPage')}</h1>
}
