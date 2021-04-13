import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const Works = () => {
  return (
    <div id="works">
      <div className="section__main wrapper">

        <h1 className="title_main">Mis proyectos...</h1>

        <div className="">

          <Splide
            // options={{
            //   rewind: true,
            //   width: 800,
            //   //autoWidth: true,
            //   gap: '1rem',
            //   type: 'loop'
            // }}

            // options={{
            //   rewind: true,
            //   perPage: 3,
            //   width: '75rem',
            //   perMove: 1,
            //   gap: '1rem',
            // }}
            // onMoved={(splide, newIndex) => { console.log('moved', newIndex) }}

            options={{
              type: 'loop',
              //rewind: true,
              cover: true,
              width: '100%',
              perPage: 3,
              //fixedWidth: '12rem',
              breakpoints: {
                576: {
                  perPage: 1,
                }
              },
              focus: 'center',
              pagination: false,
            }}

          >
            <SplideSlide>
              <div className="card_slide">
                <img alt="imagen" src="../images/work01.jpg" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card_slide">
                <img alt="imagen" src="../images/work01.jpg" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card_slide">
                <img alt="imagen" src="../images/work01.jpg" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card_slide">
                <img alt="imagen" src="../images/work01.jpg" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card_slide">
                <img alt="imagen" src="../images/work01.jpg" />
              </div>
            </SplideSlide>
          </Splide>


        </div>

      </div>
    </div >
  )
}
