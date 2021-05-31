import React from 'react';
import { FaPaintBrush, FaUsers, FaLightbulb, FaRegSmileWink, FaLaptop, FaHandshake } from "react-icons/fa";

export const StudyExperience = () => {
  return (

    <div id="study_experience">

      <div className="section__main wrapper">

        <h1 className="title_main">Habilidades principales</h1>

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
    </div>
  )
}
