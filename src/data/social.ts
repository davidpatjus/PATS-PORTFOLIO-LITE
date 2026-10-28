import { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { whatsappUrl } from '../i18n/context'

export const EMAIL = 'davideste200309@gmail.com'

export interface SocialLink {
  label: string
  icon: IconType
  href: (whatsappText: string) => string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'WhatsApp', icon: FaWhatsapp, href: (text) => whatsappUrl(text) },
  { label: 'LinkedIn', icon: FaLinkedin, href: () => 'https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/' },
  { label: 'GitHub', icon: FaGithub, href: () => 'https://github.com/davidpatjus' },
  { label: 'Email', icon: FaEnvelope, href: () => `mailto:${EMAIL}` },
  { label: 'Instagram', icon: FaInstagram, href: () => 'https://www.instagram.com/david.juspian/' },
]
