import React from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export const Contact = () => {

  const handleContactMe = () => {
    alert("Contacting...");
  }

  const handleDownloadCV = () => {
    alert("Download...");
  }

  return (
    <>
      <div id="contact">
        <div className="section__main  contact-grid wrapper">

          <div>

            <h1 className="title_main">Hey, gracias...</h1>

            <p>
              Espero que te haya gustado conocer mas de mi en el ambito profesional, es por eso que te invito a descargar mi CV y contactarme para charlar con una bebida mientras comemos galletas.
          </p>

            <ButtonPrimary
              title="Descargar CV"
              styleClass="btn__second btn__sm__second"
              eventclick={handleDownloadCV}
            />



          </div>

          <div className="red-social">

            <button>
              <FaLinkedinIn />
            </button>
            <button>
              <FaYoutube />
            </button>
            <button>
              <FaInstagram />
            </button>

          </div>

          <div>

            <form id="form_contact">

              <div className="col-12">
                <div>
                  <label>Tus nombres y apellidos</label>
                </div>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <div>
                  <label>Tu correo</label>
                </div>
                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <div>
                  <label>Descripción</label>
                </div>
                <div>
                  <textarea className="form-control" rows="5"></textarea>
                </div>
              </div>

              <div className="box-enviar">
                <ButtonPrimary
                  title="Enviar"
                  styleClass="btn__primary btn__sm"
                  eventclick={handleContactMe}
                />
              </div>

            </form>

          </div>






        </div>

      </div>
      <div className="footer"></div>
    </>
  )
}
