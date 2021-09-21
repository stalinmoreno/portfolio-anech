import React from 'react';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';

import { StudyExperience } from './components/StudyExperience/StudyExperience';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Works } from './components/Works/Works';
import { WorkProvider } from './Context/DataContext';


export const PortfolioApp = () => {
  return (
    <>
      <Home />
      <About />
      <StudyExperience />
      <WorkProvider>
        <Works />
      </WorkProvider>
      <Testimonials />
      <Contact />
    </>
  )
}
