import { useState } from 'react'
import Logo from '/logo.png'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <a href="/" className='mr-6 flex items-center space-x-2'>
                <img src={Logo} alt="" className='w-48 h-9' />
            </a>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors hover:text-black/60 text-black'>Sobre mi</a>
                <a href="#projects" className='transition-colors hover:text-black/60 text-black'>Proyectos</a>
                {/* <a href="#testimonials" className='transition-colors hover:text-black/60 text-black'>Testimonios</a> */}
                <a href="#contact" className='transition-colors hover:text-black/60 text-black'>Contacto</a>
            </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}>
           <span className='sr-only'>Open main menu</span>
           {mobileMenuOpen ? (
            <X className='h-6 w-6' aria-hidden="true"/>
           ):(
            <Menu className='h-6 w-6' aria-hidden="true"/>
           )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <a href="#about" className='block border-black border rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-gray-900'>Sobre mi</a>
                <a href="#projects" className='block border-black border rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-gray-900'>Proyectos</a>
                {/* <a href="#testimonials" className='block border-black border rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-gray-900'>Testimonios</a> */}
                <a href="#contact" className='block border-black border rounded-md px-3 py-2 text-base font-medium hover:bg-gray-300 hover:text-gray-900'>Contacto</a>
            </div>
        </div>
      )}
    </header>
  )
}

export default Header;