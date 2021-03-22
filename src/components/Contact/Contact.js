import React from 'react'
import { ButtonPrimary } from '../UI/ButtonPrimary';
import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export const Contact = () => {

  const handleContactMe = () => {
    alert("Contacting...");
  }

  return (
    <>
      <div id="contact">
        <div className="section__main">

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



        </div>

      </div>
      <div className="footer"></div>
    </>
  )
}
