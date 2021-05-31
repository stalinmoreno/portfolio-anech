import React from 'react';
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

export const Home = () => {

  const handleDownloadCV = () => {
    alert("Descargando...");
  }

  return (
    <div id="home">
      <div className="section__main b-grid wrapper">

        <div className="sec__home">
          <h1>
            <div>Hola! Soy <span className="title_home">Astrid</span></div>
          </h1>
          <ul>
            <li>Analista de Innovación</li>
            <li>Diseñadora UX/UI</li>
          </ul>

          {/* <div className="text-center"> */}

          <ButtonPrimary
            title="Descargar CV"
            styleClass="btn__primary btn__md"
            eventclick={handleDownloadCV}
          />

          {/* </div> */}

        </div>

        {/* <div className="text-center "> */}

        <div className="box__foto">
          <div id="home__foto"></div>
        </div>



        {/* </div> */}

        <div className="home__red_social">
          <a href="#" className="icon_red_social" >
            <FaLinkedinIn />
          </a>
          <a href="#" className="icon_red_social" >
            <FaYoutube />
          </a>
          <a href="#" className="icon_red_social" >
            <FaTwitter />
          </a>

          {/* <FaLinkedinIn className="icon_red_social" />
          <FaYoutube className="icon_red_social" />
          <FaTwitter className="icon_red_social" /> */}
        </div>



      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L1440,96L1440,320L0,320Z"></path></svg> */}
      <div class="svg">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,320L1440,256L1440,320L0,320Z"></path></svg> */}
      </div>
    </div>
  )
}
