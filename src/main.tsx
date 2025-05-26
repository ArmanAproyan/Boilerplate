import { createRoot } from 'react-dom/client'
import store from '@/app/store'
import { Provider } from 'react-redux'
import './i18n'

import './styles/index.scss'
import { RouterProvider } from './providers'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider />
  </Provider>
)
