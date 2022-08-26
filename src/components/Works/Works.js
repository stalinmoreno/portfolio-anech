import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { FaAngleRight } from "react-icons/fa";
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModalWork } from './ModalWork';
//import { useModal } from '../hooks/useModal'
import dataWorks from '../../data/works.json';
//import reactDom from 'react-dom';
//import { WorkContext } from '../../Context/DataContext';
import { useModalWithData } from '../hooks/useModalWithData';
import { FaFigma, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import svgFigma from '../../assets/image/figma.svg';
import svgBehance from '../../assets/image/behance.svg';

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

    gsap.from(effectTitle.current, 1, {
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
      delay: 0.6,
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

  const mostrarIconos = (_icon) => {
    let htmlIcon
    if (_icon == "figma") {
      //htmlIcon = <FaFigma className='work-details_tools_icon' />
      htmlIcon = <img src={svgFigma} />;
    }
    if (_icon == "FaBehance") {
      htmlIcon = <img src={svgBehance} />;
    }
    return htmlIcon
  }

  return (
    <Element id="works" name="indexWorks">
      <div className="section__main wrapper">

        <h1 className="title_main" ref={effectTitle}>Mis proyectos...</h1>
        <div ref={effectSplide} className="work_grid">
          {/* <Splide options={splideOptions} >  */}
          {
            dataWorks.Works.length > 0 ?
              dataWorks.Works.map(work => (
                // <SplideSlide  >
                // <div className="panel_works">
                //   <a key={work.id} onClick={() => { setData(work); setIsModalOpened(true); }}>

                // <div div className="panel_works_item" >
                //   <img alt="imagen" src={work.image} />
                //   <div className="panel_works_item_footer">
                //     <div className="panel_works_item_footer_title">{work.title}</div>
                //     <div className="panel_works_item_footer_description">{work.description}</div>
                //     <div className="panel_works_item_footer_link">
                //       <a><span>Ver más</span><FaAngleRight /></a>
                //     </div>
                //   </div>
                // </div>
                //</a>
                //</div>
                // </SplideSlide>

                <>

                  <div key={work.id} className={"section-separate " + (work.id === 1 ? "hidenLine " : "showLine ")}><span></span></div>
                  <div className="panel_works_item" >
                    <img alt="imagen" src={work.image} className={(work.id % 2 === 0 ? "box-order-2 " : "box-order-1 ")} />
                    <div className={"panel_works_item_footer " + (work.id % 2 === 1 ? "box-order-2 " : "box-order-1 ")}>
                      <div className="panel_works_item_footer_title">{work.title}</div>
                      <div className="panel_works_item_footer_description">{work.description}</div>
                      <div className="panel_works_item_footer_link">
                        <a key={work.id} onClick={() => { setData(work); setIsModalOpened(true); }}><span>Ver más</span><FaAngleRight /></a>
                      </div>
                    </div>
                  </div>
                </>

              )) : "No hay información disponible"
          }

          {/* </Splide> */}


          {/* comentado: 17/08/2022
          <div div className="panel_works_item" >
            <img alt="imagen" src={"../images/work01.jpg"} />
            <div className="panel_works_item_footer">
              <div className="panel_works_item_footer_title">UTEC 1</div>
              <div className="panel_works_item_footer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className="panel_works_item_footer_link">
                <a><span>Ver más</span><FaAngleRight /></a>
              </div>
            </div>
          </div>

          <div className="section-separate"><span></span></div>

          <div div className="panel_works_item" >
            <div className="panel_works_item_footer box-order-2">
              <div className="panel_works_item_footer_title">UTEC 2</div>
              <div className="panel_works_item_footer_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className="panel_works_item_footer_link">
                <a><span>Ver más</span><FaAngleRight /></a>
              </div>
            </div>
            <img alt="imagen" src={"../images/work01.jpg"} className="box-order-1" />
          </div> */}


        </div >

      </div >


      <ModalWork
        isActive={isModalOpened}
        handleClose={() => setIsModalOpened(false)}
      >
        {data &&
          <>
            {/* <div className='work-details-box'> */}
            <h1 className='work-details-h1'>{data.title}</h1>
            <div className='work-details-over'>

              <div className='work-datails-image'>
                <p>
                  {data.description}
                </p>

                <div className='work-details-title'>
                  <h3>Herramientas</h3>
                </div>
                <ul className='work-details_ul'>
                  {
                    data.tools.map(tool =>
                      <li>
                        <div className='work-details_tools'>{mostrarIconos(tool.icon)}</div>
                      </li>)
                  }
                </ul>
                <div className='img-work-project'>
                  <img src={data.image}></img>
                </div>
              </div>
            </div>
            {/* </div> */}
          </>
        }

      </ModalWork>

    </Element >
  )
}
