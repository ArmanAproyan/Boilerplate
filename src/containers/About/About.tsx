import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.scss'

export const About = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('AboutPage')}</h1>
}
