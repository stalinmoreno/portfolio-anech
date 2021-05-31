import React from 'react';
import { FaItunesNote } from "react-icons/fa";

export const CardAboutBasic = ({ description, number, title }) => {
  return (
    <>
      <div className="card_basic">

        <div className="card_basic_head">

          <div className="card_basic_head_title">
            <div className="card_basic_head_title_num">{number}</div>
            <div className="card_basic_head_title_subtitle">{title}</div>
          </div>
          <div className="card_basic_head_icon">
            <FaItunesNote />
          </div>
        </div>

        <div className="card_basic_body">
          <div className="card_basic_body_description">
            {description}
          </div>
        </div>

      </div>
    </>
  )
}
