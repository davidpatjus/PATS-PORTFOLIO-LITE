import Logo from '/PATS.png'
import { FaWhatsapp , FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiNextdotjs , SiTailwindcss, SiTypescript } from "react-icons/si";

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hola, <br />Soy David <span className='text-red-500'>Patiño.</span></h1>
               <p className='md:text-2xl text-xl mb-4 font-semibold'>Desarrollador De Software</p>
               <p className='mb-4 md:text-lg'>Soy un apasionado desarrollador full-stack dedicado a convertir ideas innovadoras en potentes soluciones digitales. Con una sólida base en desarrollo frontend y backend, doy vida a visiones a través de código limpio y eficiente y diseños cautivadores. Explora mis proyectos para ver cómo la creatividad se une a la tecnología, y vamos a transformar tu próxima gran idea en realidad juntos.</p>
               {/* <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="#" download target='_blank'>Descargar CV</a></button> */}
               <button className='bg-black text-white px-3 py-2 w-max rounded-md md:text-lg font-semibold'><a href="https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20" target='_blank'>Contáctame</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={Logo} alt="" className='lg:h-[97vh] h-96 w-max' />
                 <SiTypescript  className='absolute text-blue-700 w-24 h-14 top-36 left-0 rounded-full md:hidden'/>
                 <SiNextdotjs  className='absolute w-20 h-16 top-0 right-5 md:hidden'/>
                 <SiTailwindcss className='absolute w-16 h-20 rounded-full text-cyan-500 right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-56 right-10 hidden bg-background border py-8 px-1 lg:flex flex-col gap-8 rounded-full'> 
        <a href="https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20"><FaWhatsapp  className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://www.instagram.com/david.juspian/"><FaInstagram className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://github.com/davidpatjus"><FaGithub  className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
        <a href="https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/"><FaLinkedin className='w-24 h-14 text-red-600 hover:text-foreground'/></a>
      </div>
    </section>
  )
}

export default Hero;