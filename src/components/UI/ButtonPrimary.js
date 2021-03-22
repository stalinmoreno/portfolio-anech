import React from 'react'

export const ButtonPrimary = ({ title, styleClass, eventclick }) => {
  return (
    <>
      <button
        className={styleClass}
        onClick={eventclick}
      >
        {title}
      </button>
    </>
  )
}
