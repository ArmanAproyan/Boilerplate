import { useLogin } from '@/hooks'
import { INPUT_ITEMS } from './Login.const'
import { useClassNames } from '@/hooks'

import styles from './Login.module.scss'

export const Login = () => {
  const [handleChange, handleSubmit, errorMessage] = useLogin()

  const { cn } = useClassNames('container', styles)

  return (
    <div className={cn()}>
      <div className={cn('__card')}>
        <h1 className={cn('__card__title')}>Login</h1>
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
          <span className={cn('__error')}>{errorMessage}</span>
        </form>
        <p className={cn('__link')}>Forgot password?</p>
      </div>
    </div>
  )
}
