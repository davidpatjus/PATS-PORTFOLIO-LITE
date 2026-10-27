import Logo from '/PATS.webp'
import { FaWhatsapp , FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiNextdotjs , SiTailwindcss, SiTypescript } from "react-icons/si";
import { useLanguage, whatsappUrl } from '../i18n/context'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>{t.hero.greeting} <br />{t.hero.iAm} <span className='text-red-500'>Patiño.</span></h1>
               <p className='md:text-2xl text-xl mb-4 font-semibold'>{t.hero.role}</p>
               <p className='mb-4 md:text-lg'>{t.hero.intro}</p>
               {/* <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="#" download target='_blank'>Descargar CV</a></button> */}
               <a className='bg-black text-white px-3 py-2 w-max rounded-md md:text-lg font-semibold' rel='noopener noreferrer' href={whatsappUrl(t.whatsappGreeting)} target='_blank'>{t.hero.cta}</a>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={Logo} alt={t.hero.photoAlt} className='lg:h-[97vh] h-96 w-max' />
                 <SiTypescript aria-hidden='true'  className='absolute text-blue-700 w-24 h-14 top-36 left-0 rounded-full md:hidden'/>
                 <SiNextdotjs aria-hidden='true'  className='absolute w-20 h-16 top-0 right-5 md:hidden'/>
                 <SiTailwindcss aria-hidden='true' className='absolute w-16 h-20 rounded-full text-cyan-500 right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-56 right-10 hidden bg-background border py-8 px-1 lg:flex flex-col gap-8 rounded-full'> 
        <a href={whatsappUrl(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp  className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://www.instagram.com/david.juspian/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://github.com/davidpatjus" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub  className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
      </div>
    </section>
  )
}

export default Hero;