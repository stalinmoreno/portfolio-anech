import React from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary'
import { CardAbout } from '../UI/CardAbout';
import { CardAboutBasic } from '../UI/CardAboutBasic';

export const About = () => {

  const handleDownloadCV = () => {
    console.log('Download...');
  }

  return (
    <div id="about">
      <div className="section__main  wrapper">

        <div className="sec__about about-grid">

          <div className="box__about">
            <h1 className="title_main">Sobre mí</h1>
            <p>
              Soy Astrid, analista de Innovación y transformación digital, especialista en diseño centrado en el usuario.
            </p>
            <p>
              Con experiencia, facilitando la creación de nuevas soluciones con el uso de distintas metodologías, marcos y herramientas.
            </p>

            <div className="box__input">
              <ButtonPrimary
                title="Sobre mí"
                styleClass="btn__primary btn__sm m-b m-b-opt"
                eventclick={handleDownloadCV}
              />

              {/* <ButtonPrimary
                title="Contactame"
                styleClass="btn__second btn__sm__second m-b"
                eventclick={handleDownloadCV}
              /> */}
            </div>

          </div>

          <div className="box__foto_about">
            <div id="about__foto"></div>
          </div>


        </div>

        {/* <div className="box__personal">
          <CardAboutBasic number="01" title="Personal" description="Mi cumpleaños es el 19 de agosto y soy signo leo" />
          <CardAboutBasic number="02" title="Pasatiempo" description="Me encanta ver series, sobre todo si son K-dramas!!!" />
          <CardAboutBasic number="03" title="Musica" description="Todo tipo de musicas, y si son pegadizas, mejor !!!" />
        </div> */}



      </div>
    </div>
  )
}
