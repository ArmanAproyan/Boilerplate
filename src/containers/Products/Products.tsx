import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Products.module.scss'

export const Products = () => {
  const { cn } = useClassNames('title', styles)
  const { i18n } = useTranslation()

  return <h1 className={cn()}>{i18n.t('ProductsPage')}</h1>
}
