import Logo from '../imgs/Netflix-logo.png'
import Avatar from '../imgs/Netflix-avatar.png'
import '../scss/Navbar.scss'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [darkBackground, setDarkBackground] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setDarkBackground(true)
      } else {
        setDarkBackground(false)
      }
    })

    return () => {window.removeEventListener('scroll')}
  }, [])
  return (
    <nav className={`navbar ${darkBackground && 'navbar__dark'}`}>
      <img className='navbar__logo' src={Logo} alt="Netflix" />
      <img className='navbar__avatar' src={Avatar} alt="Avatar" />
    </nav>
  );
}

export default Navbar;