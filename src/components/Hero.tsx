import Logo from '/PATS.webp'
import { SiNextdotjs , SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { useLanguage } from '../i18n/context'
import { SOCIAL_LINKS } from '../data/social'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:min-h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <span className='inline-flex w-max items-center gap-2 rounded-full border border-green-600/30 bg-green-50 px-3 py-1 text-sm font-medium text-green-800'>
                 <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse' aria-hidden='true' />
                 {t.hero.badge}
               </span>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>{t.hero.greeting} <br />{t.hero.iAm} <span className='text-red-500'>Patiño.</span></h1>
               <p className='md:text-2xl text-xl font-semibold'>{t.hero.role}</p>
               <p className='md:text-lg text-gray-700'>{t.hero.intro}</p>
               <div className='flex flex-wrap gap-3 pt-2'>
                 <a href='#projects' className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md md:text-lg font-semibold'>{t.hero.ctaProjects}</a>
                 <a href='#contact' className='bg-black hover:bg-black/80 text-white px-4 py-2 rounded-md md:text-lg font-semibold'>{t.hero.ctaContact}</a>
                 <a href={t.cvFile} download className='inline-flex items-center gap-2 border-2 border-black hover:bg-black hover:text-white px-4 py-2 rounded-md md:text-lg font-semibold transition-colors'>
                   <FaFileDownload className='h-4 w-4' aria-hidden='true' />
                   {t.hero.ctaCv}
                 </a>
               </div>
               <dl className='grid grid-cols-3 gap-4 pt-4 max-w-lg'>
                 {t.hero.stats.map((stat) => (
                   <div key={stat.label} className='flex flex-col-reverse border-l-2 border-red-500 pl-3'>
                     <dt className='text-xs md:text-sm text-gray-600 leading-tight'>{stat.label}</dt>
                     <dd className='text-2xl md:text-3xl font-bold'>{stat.value}</dd>
                   </div>
                 ))}
               </dl>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={Logo} alt={t.hero.photoAlt} className='lg:h-[90vh] h-96 w-max' />
                 <SiTypescript aria-hidden='true'  className='absolute text-blue-700 w-24 h-14 top-36 left-0 rounded-full md:hidden'/>
                 <SiNextdotjs aria-hidden='true'  className='absolute w-20 h-16 top-0 right-5 md:hidden'/>
                 <SiTailwindcss aria-hidden='true' className='absolute w-16 h-20 rounded-full text-cyan-500 right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-56 right-10 hidden bg-background border py-8 px-1 xl:flex flex-col gap-8 rounded-full'>
        {SOCIAL_LINKS.slice(0, 4).map(({ label, icon: Icon, href }) => (
          <a key={label} href={href(t.whatsappGreeting)} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className='w-24 h-12 text-red-600 hover:text-foreground'/>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero;
