import React from 'react';

export const ButtonDownload = ({ title, styleClass }) => {
  return (
    <>
      <a
        className={styleClass}
        //onClick={eventclick}
        download="CV-AstridEscajadilloChavez.pdf"
        href={"../pdf/CV-AstridEscajadilloChavez.pdf"}
        target="blank"
      >
        {title}
      </a>
    </>
  )
}
