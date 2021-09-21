import React, { useEffect, useRef } from 'react';
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { ButtonDownload } from '../UI/ButtonDownload';
//import { FaLinkedinIn, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import { FaIcon } from '../UI/FaIcon';
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap/all';
import data from '../../data/networks.json';

export const Home = () => {

  const handleDownloadCV = () => {
    alert("Descargando...");
  }

  //Effects
  const effectBoxFoto = useRef(null);
  const effectTitle = useRef(null);
  const effectDetail = useRef(null);
  const effectDownload = useRef(null);

  useEffect(() => {
    //gsap.from(cSecHome.current, 0.8, { opacity: 0, duration: 3, ease: Linear.easeIn }, "feature+=0.25");
    //gsap.from(cHome.current, 0.5, { left: 300, autoAlpha: 0 });
    //gsap.from(cHome.current, 0.2, { scale: 0, autoAlpha: 0 }, 0.1);
    //gsap.from(effectTitle.current, 0.4, { right: 50, autoAlpha: 0 }, "-=0.25");
    //gsap.from(effectDetail.current, 0.4, { right: 50, autoAlpha: 0 }, "-=0.25");
    //gsap.from(effectDownload.current, 0.5, { scale: 0.5, autoAlpha: 1, opacity: 0 }, "feature+=0.25");
    //gsap.from(effectDownload.current, 0.3, { opacity: 0, duration: 2, ease: Linear.easeIn, scale: 0.8, autoAlpha: 1 }, "feature+=0.25");
    gsap.from(effectTitle.current, 0.5, { opacity: 0, y: +100, ease: Power3.easeOut });
    gsap.from(effectDetail.current, 0.5, { opacity: 0, y: +100, ease: Power3.easeOut, delay: 0.2 });
    gsap.from(effectDownload.current, 0.5, { opacity: 0, y: +100, ease: Power3.easeOut, delay: 0.4 });
    gsap.from(effectBoxFoto.current, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25");
  }, []);

  // const { networks } = apiNetworks;
  // let redes = apiNetworks.map((network) => {
  //   return network;
  // });
  // console.log(networks);

  return (
    <Element id="home" name="indexHome">
      <div className="section__main b-grid wrapper">

        <div className="sec__home" >
          <h1 ref={effectTitle}>
            <div>Hola! Soy <span className="title_home">Astrid</span></div>
          </h1>
          <ul ref={effectDetail}>
            <li>Analista de Innovación y Transformación Digital</li>
            <li>Diseñadora UX/UI</li>
          </ul>
          <div ref={effectDownload}>
            <ButtonDownload
              title="Descargar CV"
              styleClass="btn__primary btn__md"
            />
          </div>
        </div>

        <div className="box__foto" ref={effectBoxFoto} >
          <div id="home__foto" ></div>
          <div className="home__red_social" >
            {
              data.Networks.map(network => (
                < a
                  href={network.src}
                  className="icon_red_social"
                  target="blank"
                >
                  <FaIcon icon={network.icon} />
                </a>
              ))
            }
          </div>
        </div>

      </div>

      <div class="svg"></div>
    </Element>
  )
}
