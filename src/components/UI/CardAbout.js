import React from 'react';
import { FaItunesNote } from "react-icons/fa";

export const CardAbout = () => {
  return (
    <>
      <div className="card">

        <div className="card_content">
          <div className="card_content_circle">
            <FaItunesNote />
          </div>
        </div>

        <div className="card_body">

          <div className="card_body_title">
            <h2>Personal</h2>
          </div>
          <div className="card_body_description">
            Tengo 24 años y mi cumpleaños es el 19 de agosto.
          </div>

        </div>

      </div>
    </>
  )
}
