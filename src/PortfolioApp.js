import React from 'react';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { StudyExperience } from './components/StudyExperience/StudyExperience';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Works } from './components/Works/Works';

export const PortfolioApp = () => {
  return (
    <div className="App">

      <div className="container">
        <Navbar />
        <Home />
        <About />
        <StudyExperience />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}
