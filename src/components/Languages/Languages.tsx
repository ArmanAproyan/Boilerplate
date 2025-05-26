import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useOutSideClick } from '@/hooks'
import { LANGUAGES } from './Languages.const'
import { useClassNames } from '@/hooks'

import styles from './Languages.module.scss'

export const Languages = () => {
  const { i18n } = useTranslation()

  const [open, setOpen] = useState(false)

  const dropdownRef = useOutSideClick(() => setOpen(false))

  const { cn } = useClassNames('container', styles)

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0]

  return (
    <div className={cn()} ref={dropdownRef}>
      <button className={cn('__toggle')} onClick={() => setOpen((prev) => !prev)} type="button">
        {currentLang.label}
        <span className={open ? cn('__arrowUp') : cn('__arrowDown')} />
      </button>
      <div className={cn('__shadow_1')}></div>
      <div className={cn('__shadow_2')}></div>

      {open && (
        <ul className={cn('__dropdown')}>
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              className={`${cn('__item')} ${lang.code === currentLang.code ? styles.active : ''}`}
              onClick={() => handleSelect(lang.code)}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
