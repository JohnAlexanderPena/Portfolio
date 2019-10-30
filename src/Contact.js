import React from 'react';
import pdf from './resume/FinalResumecopy.pdf'


const ContactInfo = () => {
  return (
    <section id="contact" className="mapWrap">
      <div id="googleMap" style={{width: '100%'}} />
      <div id="contact-area">
        <div className="container">
          <h2 className="block_title">Contact Info</h2>
          <div className="row">
            <div className="col-xs-12">
            </div>
            <div className="col-sm-6">
              <div className="moreDetails">
                <h2 className="con-title">More About me</h2>
                <p> If you managed to make it this far, welcome! I was born and raised by a single immigrant mother from Mexico in New York.
                I love solving riddles, puzzles, and always on the look for the next challenge! Programming has so far been the most amazing
                career choice and I fell in love with the never-ending learning experience.
                <br/>When I'm not doing anything code related I'm either watching Youtube videos
                or playing videos game on PC or console. Anywho, if there's anything else you'd like to know, shoot me an email and I'll definately get back to you! Thanks for reading!
                    </p>
                <ul className="address">
                  <li><i className="pe-7s-map-marker" /><span>86-88 104Th St.,<br />Queens, NY 11418,<br />United States</span></li>
                  <li><i className="pe-7s-mail" /><span>jpena91@@gmail.com</span></li>
                  <li><i className="pe-7s-phone" /><span>646-920-5848</span></li>
                  <li><i className="pe-7s-global" /><span><a href="#tbd">www.johnalexanderpena.com</a></span></li>
                </ul>
              </div>
            </div>
              <i className="pe-7s-portfolio pe-dj pe-va" />
              <h1>
              <a href={pdf}>View Resume</a>
              </h1>
          </div>
        </div>
      </div>
      <div id="social">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ul className="scoialinks">
              <li className="normal-txt">Find me on</li>
              <li className="social-icons"><a className="linkedin" href={"https://www.linkedin.com/in/john-pena-7bb867b9"} /></li>
              <li className="social-icons"><a className="wordpress" href={"https://medium.com/@jpena91"} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </section>
  )
}

export default ContactInfo
