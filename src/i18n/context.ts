import { createContext, useContext } from 'react'
import { Language, Translations, translations } from './translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'es',
  setLanguage: () => {},
  t: translations.es,
})

export const useLanguage = () => useContext(LanguageContext)

export const WHATSAPP_PHONE = '573146200770'

export const whatsappUrl = (text: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`
