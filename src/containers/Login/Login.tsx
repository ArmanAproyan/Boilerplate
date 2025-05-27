import { useLogin } from '@/hooks'
import { INPUT_ITEMS } from './Login.const'
import { useClassNames } from '@/hooks'
import { useTranslation } from 'react-i18next'

import styles from './Login.module.scss'

export const Login = () => {
  const [handleChange, handleSubmit, errorMessage] = useLogin()
  const { i18n } = useTranslation()

  const { cn } = useClassNames('container', styles)

  return (
    <div className={cn()}>
      <div className={cn('__login-block')}>
        <h1 className={cn('__login-block__title')}>{i18n.t('LoginPage')}</h1>
        <form onSubmit={handleSubmit}>
          {INPUT_ITEMS.map(({ id, name, type, placeholder }) => {
            return (
              <input
                key={id}
                onChange={handleChange}
                name={name}
                type={type}
                placeholder={placeholder}
                className={cn('__input')}
              />
            )
          })}
          <input type="submit" className={cn('__submit')} value="Sign In" />
          <span className={cn('__error-message')}>{errorMessage}</span>
        </form>
        <p className={cn('__forget-link')}>{i18n.t('ForgetPassword')}</p>
      </div>
    </div>
  )
}
