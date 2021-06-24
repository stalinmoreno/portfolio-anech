import React, { useEffect, useRef } from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Contact = () => {

  const handleContactMe = () => {
    alert("Contacting...");
  }

  const handleDownloadCV = () => {
    alert("Download...");
  }

  //Effects
  gsap.registerPlugin(ScrollTrigger);

  const effectTitle = useRef(null);
  const effectSubTitle = useRef(null);
  const effectDownload = useRef(null);
  const effectLinkedin = useRef(null);
  const effectYoutube = useRef(null);
  const effectTiwitter = useRef(null);

  useEffect(() => {

    gsap.from(effectTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 65%",
        //markers: true,
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    gsap.from(effectSubTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectSubTitle.current,
        toggleActions: "play none none none",
        start: "top 65%",
        //markers: true,
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    gsap.from(effectDownload.current, 0.5, {
      scrollTrigger: {
        trigger: effectDownload.current,
        toggleActions: "play none none none",
        start: "top 70%",
        //markers: true,
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.6,
    });

    gsap.from(effectLinkedin.current, 0.5, {
      scrollTrigger: {
        trigger: effectLinkedin.current,
        toggleActions: "play none none none",
        start: "top 75%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.6,
    });

    gsap.from(effectYoutube.current, 0.6, {
      scrollTrigger: {
        trigger: effectYoutube.current,
        toggleActions: "play none none none",
        start: "top 75%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.7,
    });

    gsap.from(effectTiwitter.current, 0.7, {
      scrollTrigger: {
        trigger: effectTiwitter.current,
        toggleActions: "play none none none",
        start: "top 75%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.8,
    });



  }, []);

  return (
    <Element name="indexContact">
      <div id="contact">
        <div className="section__main  contact-grid wrapper">
          <h1 className="title_main" ref={effectTitle}>Hey, gracias...</h1>
          <div className="section-hey" ref={effectSubTitle}>
            <p>
              Espero que te haya gustado conocer mas de mi en el ambito profesional, es por eso que te invito a descargar mi CV y contactarme para charlar con una bebida mientras comemos galletas.
            </p>
          </div>
          <div ref={effectDownload}>
            <ButtonPrimary
              title="Descargar CV"
              styleClass="btn__second btn__sm__second"
              eventclick={handleDownloadCV}
            />
          </div>

          <div className="red-social">

            <button ref={effectLinkedin}>
              <FaLinkedinIn />
            </button>
            <button ref={effectYoutube}>
              <FaYoutube />
            </button>
            <button ref={effectTiwitter}>
              <FaInstagram />
            </button>

          </div>

          {/* <div>

            <form id="form_contact">

              <div className="col-12">
                <div>
                  <label>Tus nombres y apellidos</label>
                </div>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <div>
                  <label>Tu correo</label>
                </div>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <div>
                  <label>Descripción</label>
                </div>
                <div>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
              </div>

              <div className="box-enviar">
                <ButtonPrimary
                  title="Enviar"
                  styleClass="btn__primary btn__sm"
                  eventclick={handleContactMe}
                />
              </div>

            </form> 

          </div> */}

        </div>
      </div>
      <div className="footer-back"></div>
      <div className="footer">© Astrid Escajadillo 2021</div>
    </Element>
  )
}
