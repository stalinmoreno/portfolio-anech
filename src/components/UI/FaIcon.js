import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import * as Icons from 'react-icons/fa';
//import { FaLinkedinIn, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";


export const FaIcon = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

FaIcon.prototype = {
  icon: PROPERTY_TYPES.toString.isRequired
}
