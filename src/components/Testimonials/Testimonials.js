import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { ButtonPrimary } from '../UI/ButtonPrimary';

export const Testimonials = () => {


  const splideOptions = {
    rewind: true,
    width: '90rem',
    //autoWidth: true,
    gap: '0rem',
    type: 'loop',
    //destroy: true,
    perPage: 3,
    perMove: 3,
    focus: 'center',
    //cover: true,
    breakpoints: {
      1024: {
        perPage: 2,
        destroy: false,
      },
      800: {
        perPage: 1,
        destroy: false,
      },

    },

  }

  const splideOptions2 = {
    type: 'slide',
    //rewind: true,
    //cover: true,
    width: '100%',
    perPage: 3,
    perMove: 3,
    //fixedWidth: '12rem',

    breakpoints: {
      1060: {
        perPage: 2,
        perMove: 2,
        pagination: true,
      },
      730: {
        perPage: 1,
        perMove: 1,
        type: 'slide',
        pagination: true,
      }
    },
    focus: 'center',
    pagination: false,
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow: 'splide__arrow your-class-arrow',
      prev: 'splide__arrow--prev your-class-prev',
      next: 'splide__arrow--next your-class-next',
    },
  }


  return (
    <div id="testimonials">
      <div className="section__main wrapper">

        <h1 className="title_main">Testimonios</h1>
        <p className="title_center">Algunos testimonios que avalan mi trabajo</p>


        <Splide
          options={splideOptions2}
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
    </div >
  )
}
