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
                <p> Caution! Very cool story ahead.. A little background, I was born in New York and raised by a single immigrant mother from Mexico.
                  So yes, yo hablo español, add that to the list of languages I know haha.<br/>
                I love solving riddles, puzzles, and always on the look for the next challenge! Programming has been the most amazing
                 life changing decision I made, and I fell in love with the never-ending learning experience that comes with it!
                 </p>
                 <p>
                When I'm not doing anything code related I'm either watching documentaries, entering Youtube rabbit holes, listening to podcasts,
                  or playing videos games on PC or my PS4. Anywho, if there's anything else you'd like to know, shoot me an email and I'll definitely get back to you! Thanks for reading!
                    </p>
              </div>
            </div>
              <i className="pe-7s-portfolio pe-dj pe-va" />
              <h1>
              <a href={pdf}>View Resume</a>
              </h1>
                  <i className="pe-7s-map-marker" /><span>   Queens, NY,<br />United States</span><br />
                  <i className="pe-7s-mail" /><span>  jpena91@@gmail.com</span><br />
                  <i className="pe-7s-phone" /><span>  646-920-5848</span><br />
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
