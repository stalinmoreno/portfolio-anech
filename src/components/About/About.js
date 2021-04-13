import React from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary'
import { CardAbout } from '../UI/CardAbout';

export const About = () => {

  const handleDownloadCV = () => {
    console.log('Download...');
  }

  return (
    <div id="about">
      <div className="section__main  wrapper">

        <div className="sec__about about-grid">

          <div className="box__foto">
            <div id="home__foto"></div>
          </div>

          <div className="box__about">
            <h1 className="title_main">Sobre mí</h1>
            <p>
              Soy Astrid, una analista de innovación  y especialista en Diseño centrado en el usuario, utilizando distintas metodologías, herramientas, con experiencia facilitando y liderando distintos experimentos y proyectos.
            </p>

            <ButtonPrimary
              title="Descargar CV"
              styleClass="btn__primary btn__sm m-r"
              eventclick={handleDownloadCV}
            />

            <ButtonPrimary
              title="Contactame"
              styleClass="btn__second btn__sm__second m-l"
              eventclick={handleDownloadCV}
            />



          </div>

        </div>

        <div className="box__personal">
          <CardAbout />
          <CardAbout />
          <CardAbout />
        </div>



      </div>
    </div>
  )
}
