import { useClassNames } from '@/hooks'

import styles from './Products.module.scss'

export const Products = () => {
  const { cn } = useClassNames('title', styles)

  return <h1 className={cn()}>Welcome to Products</h1>
}
