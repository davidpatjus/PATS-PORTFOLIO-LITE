import { useLanguage } from '../i18n/context'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className='bg-gray-100 py-4 relative'>
      <div className='container mx-auto px-4 text-center text-sm text-gray-600'>
        <p>&copy; {new Date().getFullYear()} David Patiño. {t.footer.rights}</p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}

export default Footer
