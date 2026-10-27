import { ReactNode, useEffect, useState } from 'react'
import { LanguageContext } from './context'
import { Language, translations } from './translations'

const STORAGE_KEY = 'language'

const getInitialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage may be unavailable (private mode, blocked storage)
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // ignore storage errors
    }
  }, [language, t])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
