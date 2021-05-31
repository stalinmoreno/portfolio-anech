import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

//import '../Navbar/animation';

export const Navbar = () => {

  const navMenuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(0);

  const handleNavToggleClick = () => {
    setMenuActive(1);
  }

  const handleNavCloseClick = () => {
    setMenuActive(0);
  }

  return (
    <>
      <header className="header">

        <a href="#" className="header__logo">Anech</a>
        <FaBars className="header__toggle" id="nav-toggle" onClick={handleNavToggleClick} />

        <nav className={menuActive == 1 ? 'nav show' : 'nav'} id="nav-menu" ref={navMenuRef} >
          <div className="nav__content bd-grid">

            <FaTimes className="nav__close" id="nav-close" onClick={handleNavCloseClick} />

            <div className="nav__perfil">

              {/* <div className="nav__img">
                <img src="https://images.unsplash.com/photo-1601025498108-038faf2b23c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="" />
              </div> */}
              <div className="nav__logo">
                <a href="#" className="nav__name">Anech</a>
                {/* <span className="nav__profesion">Analista de Innovación</span> */}
              </div>

            </div>

            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link active">Inicio</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Sobre mi</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Habilidades</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Portafolio</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Testimonios</a></li>
                <li className="nav__item nav__contact"><a href="#" className="btn__nav">Contactame</a></li>
              </ul>
            </div>

            <div className="nav__social">
              <a href="#" className="nav__social-icon"><FaLinkedinIn /></a>
              <a href="#" className="nav__social-icon"><FaInstagram /></a>
              <a href="#" className="nav__social-icon"><FaYoutube /></a>
              <a href="#" className="nav__social-icon"><FaBehance /></a>
            </div>

          </div>
        </nav>

      </header>
    </>
  )
}
