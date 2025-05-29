import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useOutSideClick, useClassNames } from '@/hooks'
import { CODE, LANGUAGES } from './Languages.const'
import classNames from 'classnames'

import styles from './Languages.module.scss'

export const Languages = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const dropdownRef = useOutSideClick(() => setOpen(false))
  const { cn } = useClassNames('container', styles)

  const handleSelect = (code: CODE) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  const { code: langCode, label: langLabel } =
    LANGUAGES.find(({ code }) => code === i18n.language) || LANGUAGES[0]

  return (
    <div className={cn()} ref={dropdownRef}>
      <div className={cn('__toggle')} onClick={() => setOpen((prev) => !prev)}>
        {langLabel}
        <span
          className={classNames(cn('__arrowUp'), {
            [cn('__arrowUp_active')]: open
          })}
        />
      </div>
      {open && (
        <ul className={cn('__dropdown')}>
          {LANGUAGES.map(({ code, label }) => (
            <li
              key={code}
              className={classNames(cn('__item'), {
                [cn('__item_active')]: code === langCode
              })}
              onClick={() => handleSelect(code)}
              onKeyDown={({ key }) => key === 'Enter' && handleSelect(code)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
