import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Home.module.scss'

export const Home = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('HomePage')}</h1>
}
