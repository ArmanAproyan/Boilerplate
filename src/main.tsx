import App from '@/App'
import { createRoot } from 'react-dom/client'
import store from '@/app/store'
import { Provider } from 'react-redux'
import './i18n'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
