import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaAngleRight } from "react-icons/fa";
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Works = () => {



  //slider
  const splideOptions = {
    type: 'slide',
    //rewind: true,
    width: '90%',
    perPage: 2,
    perMove: 2,
    arrows: false,
    breakpoints: {
      840: {
        perPage: 1,
        perMove: 1,
        width: '80%',
        //rewind: true,
      },
      640: {
        perPage: 1,
        perMove: 1,
        width: '90%',
      },
      360: {
        perPage: 1,
        perMove: 1,
        width: '100%',
      }
    },
    pagination: true,
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow: 'splide__arrow your-class-arrow',
      prev: 'splide__arrow--prev your-class-prev',
      next: 'splide__arrow--next your-class-next',
    },
  }

  //effects
  gsap.registerPlugin(ScrollTrigger);

  const effectTitle = useRef(null);
  const effectSplide = useRef(null);

  useEffect(() => {

    gsap.from(effectTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    gsap.from(effectSplide.current, 2, {
      scrollTrigger: {
        trigger: effectSplide.current,
        toggleActions: "play none none none",
      },
      x: 500,
      autoAlpha: 0,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.4,
    });

  }, []);

  return (
    <Element id="works" name="indexWorks">
      <div className="section__main wrapper">

        <h1 className="title_main" ref={effectTitle}>Mis proyectos...</h1>
        <div ref={effectSplide}>
          <Splide
            options={splideOptions}
          >
            <SplideSlide>
              <div className="panel_works">
                <div className="panel_works_item">
                  <img alt="imagen" src="../images/work01.jpg" />
                  <div className="panel_works_item_footer">
                    <div className="panel_works_item_footer_title">UTEC 1</div>
                    <div className="panel_works_item_footer_description">Trabajo desarrollado para agilizar procesos</div>
                    <div className="panel_works_item_footer_link">
                      <a href="#"><span>Ver más</span><FaAngleRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="panel_works">
                <div className="panel_works_item">
                  <img alt="imagen" src="../images/work01.jpg" />
                  <div className="panel_works_item_footer">
                    <div className="panel_works_item_footer_title">UTEC 2</div>
                    <div className="panel_works_item_footer_description">Trabajo desarrollado para agilizar procesos</div>
                    <div className="panel_works_item_footer_link">
                      <a href="#"><span>Ver más</span><FaAngleRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="panel_works">
                <div className="panel_works_item">
                  <img alt="imagen" src="../images/work01.jpg" />
                  <div className="panel_works_item_footer">
                    <div className="panel_works_item_footer_title">UTEC 3</div>
                    <div className="panel_works_item_footer_description">Trabajo desarrollado para agilizar procesos</div>
                    <div className="panel_works_item_footer_link">
                      <a href="#"><span>Ver más</span><FaAngleRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="panel_works">
                <div className="panel_works_item">
                  <img alt="imagen" src="../images/work01.jpg" />
                  <div className="panel_works_item_footer">
                    <div className="panel_works_item_footer_title">UTEC 4</div>
                    <div className="panel_works_item_footer_description">Trabajo desarrollado para agilizar procesos</div>
                    <div className="panel_works_item_footer_link">
                      <a href="#"><span>Ver más</span><FaAngleRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>

          </Splide>
        </div>









      </div >
    </Element >
  )
}
