import React, { useEffect, useRef } from 'react';
//import { FaPaintBrush, FaUsers, FaLightbulb, FaRegSmileWink, FaLaptop, FaHandshake } from "react-icons/fa";
import { FaIcon } from '../UI/FaIcon';
import { Element } from 'react-scroll';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from '../../data/skills.json';

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
          {
            data.skills.length != 0
              ?
              data.skills.map(skill => (
                <div className="panel-card">
                  <div className="panel-card-image">
                    <div>
                      <FaIcon icon={skill.icon} />
                    </div>
                  </div>
                  <div className="panel-card-body">
                    <div className="panel-card-body-title">{skill.title}</div>
                    <div className="panel-card-body-description">{skill.descirption}</div>
                  </div>
                </div>
              ))
              : "No hay información disponible"
          }

        </div>
      </div>
    </Element>
  )
}
