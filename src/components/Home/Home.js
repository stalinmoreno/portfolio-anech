import React from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary'

export const Home = () => {

  const handleDownloadCV = () => {
    alert("Descargando...");
  }

  return (
    <div id="home" >
      <div className="section__main">

        <div className="sec__home">
          <h1>
            <div>Hola! </div>
            <div>Soy <span className="title_home">Astrid</span></div>
          </h1>
          <ul>
            <li>Analista de Innovación</li>
            <li>Diseñadora UX/UI</li>
            <li>Mentoring/Coaching</li>
          </ul>
        </div>

        <div className="text-center">

          <ButtonPrimary
            title="Descargar CV"
            styleClass="btn__primary btn__md"
            eventclick={handleDownloadCV}
          />

        </div>

        <div id="home__foto"></div>

      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L1440,96L1440,320L0,320Z"></path></svg> */}
    </div>
  )
}
