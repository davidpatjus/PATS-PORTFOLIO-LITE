import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FormEvent, lazy, Suspense } from 'react'
import { useLanguage, whatsappUrl } from '../i18n/context'
import { EMAIL, SOCIAL_LINKS } from '../data/social'

const ContactAnimation = lazy(() => import('./ContactAnimation'))

const inputClassName = 'mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'

const Contact = () => {
  const { t } = useLanguage()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = t.contact.whatsappMessage(String(data.get('name')), String(data.get('email')), String(data.get('message')))
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
    e.currentTarget.reset()
  }

  return (
    <section id='contact' className='z-40 bg-gray-800 relative py-16 px-5 md:px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <p className='text-base text-red-500 font-semibold tracking-wide uppercase'>{t.contact.label}</p>
              <h2 className='mt-2 text-3xl sm:text-4xl font-extrabold mb-4 text-white'>{t.contact.title}</h2>
              <p className='mb-6 text-white/85 text-lg'>{t.contact.subtitle}</p>
              <ul className='mb-6 space-y-2 text-white/85'>
                <li className='flex items-center gap-3'>
                  <FaEnvelope className='h-5 w-5 text-red-400' aria-hidden='true' />
                  <a href={`mailto:${EMAIL}`} className='hover:text-white underline-offset-4 hover:underline break-all'>{EMAIL}</a>
                </li>
                <li className='flex items-center gap-3'>
                  <FaMapMarkerAlt className='h-5 w-5 text-red-400' aria-hidden='true' />
                  {t.contact.location}
                </li>
              </ul>
              <div className='flex space-x-4'>
                {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" aria-label={label} className='text-red-400 hover:text-red-300'>
                    <Icon className='h-8 w-8'/>
                  </a>
                ))}
              </div>
                <Suspense fallback={<div className='w-[300px] h-[300px] mx-auto lg:w-[420px] lg:h-[420px]' />}>
                  <ContactAnimation />
                </Suspense>
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-6 md:p-10'>
              <h3 className='text-gray-900 text-3xl md:text-4xl font-bold mb-7'>{t.contact.formTitle}</h3>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>{t.contact.nameLabel}</label>
                <input type="text" id='name' name='name' required placeholder={t.contact.namePlaceholder} className={inputClassName}/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>{t.contact.emailLabel}</label>
                <input type="email" id='email' name='email' required placeholder={t.contact.emailPlaceholder} className={inputClassName}/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>{t.contact.messageLabel}</label>
                <textarea id='message' name='message' required rows={5} placeholder={t.contact.messagePlaceholder} className={inputClassName}/>
              </div>
              <button type='submit' className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg'>{t.contact.submit}</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
