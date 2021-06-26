import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import { gsap, Linear } from 'gsap/all';


export const Navbar = () => {

  const navMenuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(0);
  //const [scrollNavbar, setScrollNavbar] = useState(0);

  const handleNavToggleClick = () => {
    if (window.innerWidth < 769) {
      setMenuActive(menuActive == 1 ? 0 : 1);
    }
  }

  //Effects
  const effectHeader = useRef(null);

  useEffect(() => {
    gsap.from(effectHeader.current, 0.8, {
      opacity: 0,
      duration: 3,
      ease: Linear.easeIn
    }, "feature+=0.25");
  }, []);

  //scroll top
  /*const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setScrollNavbar(1);
    } else {
      setScrollNavbar(0);
    }
  }*/
  //Asignar evento scroll
  /*useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, []);*/

  return (
    <>
      <header className="header" ref={effectHeader}>
        <div className="container section__main">
          <a href="#" className="header__logo">Anech</a>
          <FaBars className="header__toggle" id="nav-toggle" onClick={handleNavToggleClick} />

          <nav className={menuActive == 1 ? 'nav show' : 'nav'} id="nav-menu" ref={navMenuRef} >
            <div className="nav__content bd-grid">
              <FaTimes className="nav__close" id="nav-close" onClick={handleNavToggleClick} />
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
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      to="indexHome"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-70}
                      onClick={handleNavToggleClick}
                    >Inicio</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      to="indexAbout"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-70}
                      onClick={handleNavToggleClick}
                    >Sobre mí</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      to="indexSkills"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-20}
                      onClick={handleNavToggleClick}
                    >Habilidades</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      to="indexWorks"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-20}
                      onClick={handleNavToggleClick}
                    >Portafolio</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      to="indexTestimonials"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-20}
                      onClick={handleNavToggleClick}
                    >Testimonios</Link>
                  </li>
                  <li className="nav__item nav__contact">
                    <Link
                      className="btn__nav"
                      to="indexContact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-20}
                      onClick={handleNavToggleClick}
                    >Contactame</Link>
                  </li>
                </ul>
              </div>

              <div className="nav__social">
                <a href="https://www.linkedin.com/in/astrid-escajadillo-chavez-b19535160" target="blank" className="nav__social-icon"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/astrid.escajadillo" target="blank" className="nav__social-icon"><FaInstagram /></a>
                <a href="https://www.youtube.com/channel/UCvyuR2PYB1vrcMlnzmQdB9Q" target="blank" className="nav__social-icon"><FaYoutube /></a>
                <a href="https://www.behance.net/astridescajad" target="blank" className="nav__social-icon"><FaBehance /></a>
              </div>

            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
