import React, { useContext, useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaAngleRight } from "react-icons/fa";
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalWork } from './ModalWork';
import { useModal } from '../hooks/useModal'
import dataWorks from '../../data/works.json';
import reactDom from 'react-dom';
import { WorkContext } from '../../Context/DataContext';
import { useModalWithData } from '../hooks/useModalWithData';

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


  const [
    setIsModalOpened,
    isModalOpened,
    data,
    setData] = useModalWithData();
  /* asignar context */
  // const { setSelectedWork } = useContext(WorkContext);

  // const handleSelectedWork = (id) => {
  //   setSelectedWork(id);
  // }

  return (
    <Element id="works" name="indexWorks">
      <div className="section__main wrapper">

        <h1 className="title_main" ref={effectTitle}>Mis proyectos...</h1>
        <div ref={effectSplide}>
          <Splide
            options={splideOptions}
          >
            {
              dataWorks.Works.length > 0 ?
                dataWorks.Works.map(work => (
                  <SplideSlide  >
                    <div className="panel_works">
                      <a
                        key={work.id}
                        onClick={() => {
                          setData(work);
                          setIsModalOpened(true);
                        }}
                      >
                        <div className="panel_works_item" >
                          <img alt="imagen" src={work.image} />
                          <div className="panel_works_item_footer">
                            <div className="panel_works_item_footer_title">{work.title}</div>
                            <div className="panel_works_item_footer_description">{work.description}</div>
                            <div className="panel_works_item_footer_link">
                              <a><span>Ver más</span><FaAngleRight /></a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SplideSlide>
                )) : "No hay información disponible"
            }

          </Splide>
        </div>

      </div >


      <ModalWork
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        {data &&
          <>
            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            <ol>
              {
                data.tools.map(tool => <li>{tool.title}</li>)
              }
            </ol>
          </>
        }
      </ModalWork>

    </Element >
  )
}
