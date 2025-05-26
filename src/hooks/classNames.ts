type Modifiers = Record<string, boolean | undefined | null>

export const useClassNames = (block: string, styles: Record<string, string>) => {
  const cn = (element?: string, modifiers?: Modifiers): string => {
    const base = element ? `${block}${element}` : block

    const classNames = [styles[base]].filter(Boolean)

    if (modifiers) {
      for (const [key, value] of Object.entries(modifiers)) {
        if (value) {
          const modClass = `${base}--${key}`
          if (styles[modClass]) {
            classNames.push(styles[modClass])
          }
        }
      }
    }

    return classNames.join(' ')
  }

  return { cn }
}
