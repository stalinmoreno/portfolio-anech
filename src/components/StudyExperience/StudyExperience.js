import React, { useEffect, useRef } from 'react';
import { FaPaintBrush, FaUsers, FaLightbulb, FaRegSmileWink, FaLaptop, FaHandshake } from "react-icons/fa";
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const StudyExperience = () => {

  gsap.registerPlugin(ScrollTrigger);
  const effectTitle = useRef(null);
  useEffect(() => {

    gsap.from(effectTitle.current, 0.5, {
      scrollTrigger: {
        trigger: effectTitle.current,
        toggleActions: "play none none none",
        start: "top 85%",
      },
      opacity: 0,
      y: +50,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    gsap.from(".panel-card-image", 0.5, {
      scrollTrigger: {
        trigger: ".panel-card-image",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0,
      //x: 50,
      ease: Power3.easeOut,
      delay: 0.3,
    });

    gsap.from(".panel-card-body", 0.5, {
      scrollTrigger: {
        trigger: ".panel-card-body",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -50,
      ease: Power3.easeOut,
      delay: 0.8,
    });

  }, []);

  return (

    <Element id="study_experience" name="indexSkills">
      <div className="section__main wrapper">
        <h1 className="title_main" ref={effectTitle}>Habilidades principales</h1>
        <div className="panel-main">
          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaPaintBrush />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                UX/UI
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaUsers />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                SCRUM
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaRegSmileWink />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                Innovación
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaLaptop />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                Transformación Digital
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaHandshake />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                Lean Startup
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-card-image">
              <div>
                <FaLightbulb />
              </div>
            </div>
            <div className="panel-card-body">
              <div className="panel-card-body-title">
                Design Thinking
              </div>
              <div className="panel-card-body-description">
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá.
              </div>
            </div>
          </div>


        </div>
      </div>
    </Element>
  )
}
