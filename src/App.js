import React from 'react';
import './App.css';
import Nav from './Nav'
import Skills from './Skills'
import Projects from './Projects'
import ContactInfo from './Contact'
import pdf from './resume/JohnPenaResume.pdf'




function App() {
  return (


    <div className="App">
        <header id="header">
              <div className="center text-center">
                  <h1 className="bigheadline">John Peña</h1>
                  <h4 className="subheadline">Software Engineer</h4>
              </div>
              <h3>
                <i className="pe-7s-portfolio pe-dj pe-va" /><span><a href={pdf}>  View Resume</a></span>
              </h3>
              <div className="bottom">
                <a data-scroll href="#navigation" className="scrollDown animated pulse" id="scrollToContent"><i className="pe-7s-angle-down-circle pe-va"></i></a>
              </div>
            </header>
  <Nav />
  <Skills />
  <Projects />
  <ContactInfo />

  </div>
  );
}

export default App;
