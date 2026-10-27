import { FaWhatsapp , FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { FormEvent, lazy, Suspense } from 'react'
import { useLanguage, whatsappUrl } from '../i18n/context'

const ContactAnimation = lazy(() => import('./ContactAnimation'))

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
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-red-500'>{t.contact.title}</h2>
              <p className='mb-4 text-white/85'>{t.contact.subtitle}</p>
              <div className='flex space-x-4'>
                <a href={whatsappUrl(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className='text-red-400 hover:text-red-300'>
                <FaWhatsapp className='h-8 w-8'/></a>
                <a href="https://www.instagram.com/david.juspian/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='text-red-400 hover:text-red-300'>
                <FaInstagram className='h-8 w-8'/></a>
                <a href="https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='text-red-400 hover:text-red-300'>
                <FaLinkedin  className='h-8 w-8'/></a>
                <a href="https://github.com/davidpatjus" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='text-red-400 hover:text-red-300'>
                <FaGithub  className='h-8 w-8'/></a>
              </div>
                <Suspense fallback={<div className='w-[350px] h-[350px] mx-auto lg:w-[500px] lg:h-[500px]' />}>
                  <ContactAnimation />
                </Suspense>
            </div>
            <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>{t.contact.formTitle}</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>{t.contact.nameLabel}</label>
                <input type="text" id='name' name='name' required placeholder={t.contact.namePlaceholder}  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>{t.contact.emailLabel}</label>
                <input type="email" id='email' name='email' required placeholder={t.contact.emailPlaceholder}  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>{t.contact.messageLabel}</label>
                <textarea id='message' name='message' required rows={4} placeholder={t.contact.messagePlaceholder} className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <button type='submit' className='bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg'>{t.contact.submit}</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact