import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const Works = () => {
  return (
    <div id="works">
      <div className="section__main">
        <h1 className="title_main">Mis proyectos...</h1>

        <Splide
          options={{
            rewind: true,
            width: 800,
            //autoWidth: true,
            gap: '1rem',
            type: 'loop'
          }}

        // options={{
        //   rewind: true,
        //   perPage: 2,
        //   perMove: 1,
        //   gap: '1rem',
        // }}
        // onMoved={(splide, newIndex) => { console.log('moved', newIndex) }}
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
    </div >
  )
}
