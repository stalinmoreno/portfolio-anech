import React, { useEffect, useRef } from 'react'
import { Element } from 'react-scroll';
import { ButtonPrimary } from '../UI/ButtonPrimary'
import { CardAbout } from '../UI/CardAbout';
import { CardAboutBasic } from '../UI/CardAboutBasic';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {

  //Effects
  const effectTitle = useRef(null);
  const effectParrafo1 = useRef(null);
  const effectParrafo2 = useRef(null);
  const effectButton = useRef(null);
  const effectFoto = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  //gsap.core.globals("ScrollTrigger", ScrollTrigger);

  useEffect(() => {

    gsap.from(effectFoto.current, 0.5, {
      scrollTrigger: {
        trigger: effectFoto.current,
        toggleActions: "play none none none",
        start: "top 80%",
      },
      left: -100,
      autoAlpha: 0
      // ,
      // opacity: 0,
      // y: +50,
      // ease: Power3.easeOut,
      // delay: 0.7

    });

    gsap.from(effectTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 90%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeInOut,
      delay: 0.4,
    });

    gsap.from(effectParrafo1.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 75%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.5
    });

    gsap.from(effectParrafo2.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 65%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.6
    });

    gsap.from(effectButton.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 65%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.7
    });

  }, []);

  const handleDownloadCV = () => {
    console.log('Download...');
  }

  return (
    <Element name="indexAbout" id="about">
      <div className="section__main  wrapper">
        <div className="sec__about about-grid">

          <div className="box__about">
            <h1 className="title_main" id="eTitle" ref={effectTitle}>Sobre mí</h1>
            <p ref={effectParrafo1}>
              Soy Astrid, analista de Innovación y transformación digital, especialista en diseño centrado en el usuario.
            </p>
            <p ref={effectParrafo2}>
              Con experiencia, facilitando la creación de nuevas soluciones con el uso de distintas metodologías, marcos y herramientas.
            </p>
            <div className="box__input" ref={effectButton}>
              <ButtonPrimary
                title="Sobre mí"
                styleClass="btn__primary btn__sm m-b m-b-opt"
                eventclick={handleDownloadCV}
              />
            </div>
          </div>

          <div className="box__foto_about" ref={effectFoto}>
            <div id="about__foto" ></div>
          </div>

        </div>
      </div>
    </Element>
  )
}
