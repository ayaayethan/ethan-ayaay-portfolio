import React from 'react';
import '../app.css';
import Header from './Header.js';
import Main from './Main.js';
import AboutMe from './AboutMe.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';


export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
};