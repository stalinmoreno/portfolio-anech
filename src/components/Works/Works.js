import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaAngleRight } from "react-icons/fa";


export const Works = () => {

  const splideOptions = {
    type: 'slide',
    rewind: true,
    //cover: true,
    width: '90%',
    perPage: 2,
    perMove: 2,
    //fixedWidth: '12rem',
    arrows: false,
    breakpoints: {
      // 900: {
      //   perPage: 2,
      //   perMove: 2,
      //   pagination: true,
      // },
      840: {
        perPage: 1,
        perMove: 1,
        width: '80%',
        rewind: true,
        //type: 'slide',
        //pagination: true,
      },
      640: {
        perPage: 1,
        perMove: 1,
        width: '90%',
        //type: 'slide',
        //pagination: true,
      },
      360: {
        perPage: 1,
        perMove: 1,
        width: '100%',
      }
    },
    //focus: 'center',
    pagination: true,
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow: 'splide__arrow your-class-arrow',
      prev: 'splide__arrow--prev your-class-prev',
      next: 'splide__arrow--next your-class-next',
    },
  }

  return (
    <div id="works">
      <div className="section__main wrapper">

        <h1 className="title_main">Mis proyectos...</h1>

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









      </div >
    </div >
  )
}
