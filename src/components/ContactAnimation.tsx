import Lottie from 'lottie-react'
import contact from '../Assets/Contact.json'

const ContactAnimation = () => {
  return <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px] ' />
}

export default ContactAnimation
