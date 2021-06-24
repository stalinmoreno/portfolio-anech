import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Testimonials = () => {

  const splideOptions = {
    type: 'slide',
    width: '100%',
    perPage: 3,
    perMove: 3,
    arrows: false,
    breakpoints: {
      1060: {
        perPage: 2,
        perMove: 2,
        pagination: true,
      },
      730: {
        perPage: 1,
        perMove: 1,
        pagination: true,
      }
    },
    focus: 'center',
    pagination: false,
  }

  //Effects
  gsap.registerPlugin(ScrollTrigger);

  const effectSplide = useRef(null);
  const effectTitle = useRef(null);
  const effectSubTitle = useRef(null);

  useEffect(() => {

    gsap.from(effectTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
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
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.5,
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
    <Element id="testimonials" name="indexTestimonials">
      <div className="section__main wrapper">

        <h1 className="title_main" ref={effectTitle}>Testimonios</h1>
        <p className="title_center" ref={effectSubTitle}>Algunos testimonios que avalan mi trabajo</p>

        <div ref={effectSplide}>

          <Splide
            options={splideOptions}
          >
            <SplideSlide>

              <div className="card_testimonial">
                <p className="card_comment">
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="card_author">
                  <div className="card_author_foto">
                    <img src="../images/work01.jpg" />
                  </div>
                  <div className="card_author_name">
                    <h3>Stalin Moreno</h3>
                    <div>Analista programador</div>
                    <div>Canvia</div>
                  </div>
                </div>
              </div>

            </SplideSlide>
            <SplideSlide>

              <div className="card_testimonial">
                <p className="card_comment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minima aliqua. Ut enim ad minima aliqua. Ut enim ad minim
                </p>
                <div className="card_author">
                  <div className="card_author_foto">
                    <img src="../images/work01.jpg" />
                  </div>
                  <div className="card_author_name">
                    <h3>Stalin Moreno</h3>
                    <div>Analista programador</div>
                    <div>Canvia</div>
                  </div>
                </div>
              </div>

            </SplideSlide>
            <SplideSlide>

              <div className="card_testimonial">
                <p className="card_comment">
                  Stalin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minima aliqua. Ut enim ad minima aliqua. Ut enim ad minim Stalin Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minima aliqua. Ut enim ad minima aliqua. Ut enim ad minim
                </p>
                <div className="card_author">
                  <div className="card_author_foto">
                    <img src="../images/work01.jpg" />
                  </div>
                  <div className="card_author_name">
                    <h3>Stalin Moreno</h3>
                    <div>Analista programador</div>
                    <div>Canvia</div>
                  </div>
                </div>
              </div>

            </SplideSlide>
          </Splide>
        </div>




      </div>
    </Element >
  )
}
