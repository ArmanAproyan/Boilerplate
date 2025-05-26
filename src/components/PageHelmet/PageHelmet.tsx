import { Helmet } from 'react-helmet-async'
import { THelmetProps } from './PageHelmet.props'
import { PropsWithChildren } from 'react'

export const PageHelmet = ({
  title = 'Gucci',
  description = 'Default description'
}: PropsWithChildren<THelmetProps>) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)
