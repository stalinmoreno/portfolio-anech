import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { ButtonPrimary } from '../UI/ButtonPrimary';

export const Testimonials = () => {

  const handleDownloadCV = () => {
    alert("Download...");
  }

  return (
    <div id="testimonials">
      <div className="section__main">

        <h1 className="title_main">Testimonios</h1>
        <p>Algunos testimonios que avalan mi trabajo</p>

        <Splide
          options={{
            rewind: true,
            width: 800,
            //autoWidth: true,
            gap: '1rem',
            type: 'loop'
          }}
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

        </Splide>

        <h1 className="title_main">Hey, gracias...</h1>
        <p>
          Espero que te haya gustado conocer mas de mi en el ambito profesional, es por eso que te invito a descargar mi CV y contactarme para charlar con una bebida mientras comemos galletas.
        </p>

        <ButtonPrimary
          title="Descargar CV"
          styleClass="btn__second btn__sm__second"
          eventclick={handleDownloadCV}
        />

      </div>
    </div>
  )
}
