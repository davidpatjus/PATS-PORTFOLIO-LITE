import Logo from '/public/PATS.png'
import { FaWhatsapp , FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiNextdotjs , SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hola, <br />Soy David <span className='text-red-500'>Patiño</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Desarrollador y Diseñador Web</p>
               <p className='mb-4'>Soy un desarrollador web apasionado con experiencia en React, Next.js y tecnologías web modernas. Me encanta crear sitios web hermosos y funcionales que resuelven problemas del mundo real.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="#" download target='_blank'>Descargar CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={Logo} alt="" className='lg:h-[97vh] h-96 w-max' />
                 <SiTypescript  className='absolute text-blue-700 w-24 h-14 top-36 left-0 rounded-full md:hidden'/>
                 <SiNextdotjs  className='absolute w-20 h-16 top-0 right-5 md:hidden'/>
                 <SiTailwindcss className='absolute w-16 h-20 rounded-full text-cyan-500 right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-56 right-10 hidden bg-background border py-8 px-1 md:flex flex-col gap-8 rounded-full'> 
        <FaWhatsapp  className='w-24 h-14 text-red-600 hover:text-foreground'/>
        <FaInstagram className='w-24 h-14 text-red-600 hover:text-foreground'/>
        <FaGithub  className='w-24 h-14 text-red-600 hover:text-foreground'/>
        <FaLinkedin className='w-24 h-14 text-red-600 hover:text-foreground'/>
      </div>
    </section>
  )
}

export default Hero;