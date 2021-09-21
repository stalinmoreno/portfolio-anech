import React, { useRef, useState, useEffect } from 'react'
import { Link, scroller, Events, scrollSpy } from 'react-scroll'
import { FaBars, FaTimes, FaLinkedinIn, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import { gsap, Linear } from 'gsap/all';
import { NavLink, useLocation } from 'react-router-dom';
// import { Link, HashLink } from 'react-router-hash-link';

export const Navbar = () => {

  const navMenuRef = useRef(null);
  const [menuActive, setMenuActive] = useState(0);

  const handleNavToggleClick = () => {
    if (window.innerWidth < 769) {
      setMenuActive(menuActive == 1 ? 0 : 1);
    }

  }

  const handleIndexToggleClick = (name) => {

    // if (window.innerWidth < 769) {
    //   setMenuActive(menuActive == 1 ? 0 : 1);
    // }
    // scroller.scrollTo(name, {
    //   duration: 800,
    //   delay: 0,
    //   smooth: 'easeInOutQuart'
    // })
    // let goToContainer = new Promise((resolve, reject) => {

    //   //   Events.scrollEvent.register('start', () => {
    //   //     resolve();
    //   //     Events.scrollEvent.remove('start');
    //   //   });

    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });

    // });

    // goToContainer.then(() =>
    //   scroller.scrollTo(name, {
    //     duration: 800,
    //     delay: 0,
    //     smooth: 'easeInOutQuart',
    //     containerId: 'scroll-container',
    //     //containerClass: 'App'
    //   }));

  }

  // const componentDidMount = () => {
  //   Events.scrollEvent.register('begin', function (to, element) {
  //     console.log('begin', arguments);
  //   });

  //   Events.scrollEvent.register('end', function (to, element) {
  //     console.log('end', arguments);
  //   });

  //   scrollSpy.update();
  // }

  // const componentWillUnmount = () => {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  // componentDidMount();
  // componentWillUnmount();

  //Effects
  const effectHeader = useRef(null);

  useEffect(() => {
    gsap.from(effectHeader.current, 0.8, {
      opacity: 0,
      duration: 3,
      ease: Linear.easeIn
    }, "feature+=0.25");
  }, []);

  return (
    <>
      <header className="header" ref={effectHeader}>
        <div className="container section__main">
          <a href="#" className="header__logo">Anech</a>
          <FaBars
            className="header__toggle"
            id="nav-toggle"
            onClick={handleNavToggleClick}
          />

          <nav
            className={menuActive == 1 ? 'nav show' : 'nav'}
            id="nav-menu"
            ref={navMenuRef}
          >
            <div className="nav__content bd-grid">
              <FaTimes
                className="nav__close"
                id="nav-close"
                onClick={handleNavToggleClick}
              />

              <div className="nav__perfil">
                <div className="nav__logo">
                  <a href="#" className="nav__name">Anech</a>
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
                      //exact="true"
                      offset={-70}
                      onClick={handleNavToggleClick}
                    >Inicio</Link>

                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      activeClass="active"
                      //exact
                      to="indexAbout"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={handleNavToggleClick}
                    >Sobre mí</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      to="indexSkills"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      //exact="true"
                      offset={-100}
                      onClick={handleNavToggleClick}
                    >Habilidades</Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      to="indexWorks"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                      // exact="true"
                      offset={-100}
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
                      offset={-100}
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
