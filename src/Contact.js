/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import pdf from "./resume/JohnPenaResume.pdf";

const ContactInfo = () => {
  return (
    <section id="contact" className="mapWrap">
      <div id="googleMap" style={{ width: "100%" }} />
      <div id="contact-area">
        <div className="container">
          <h2 className="block_title">Contact Info</h2>
          <div className="row">
            <div className="col-xs-12"></div>
            <div className="col-sm-6">
              <div className="moreDetails">
                <h2 className="con-title">More About me</h2>
                <p>
                  Born and raised in New York with a spanish background. Love to
                  do hikes and anything that involves awesome views and fresh
                  air. Grew up always fascinated with computers, I always found
                  myself fiddling and making changes to the hardware on my own
                  computer as a hobby. Took me a while to realize that I could
                  actually code programs myself even.
                  <br />I started to program a bit and eventually decided to
                  take a leap into the field and see what it's really about.
                  Ever since my first 'Hello World', I fell in love with the
                  idea of creating your own websites. I've since completed a
                  bootcamp, built small apps and now currently working as a Full
                  Stack Engineer at a small startup!
                </p>
                <p>
                  When I'm not doing anything code related I'm either watching
                  documentaries, entering Youtube rabbit holes, listening to
                  podcasts, or playing videos games on PC or my PS4. Anywho, if
                  there's anything else you'd like to know, shoot me an email
                  and I'll definitely get back to you! Thanks for reading!
                </p>
              </div>
            </div>
            <i className="pe-7s-portfolio pe-dj pe-va" />
            <h1>
              <a href={pdf}>View Resume</a>
              <br />
            </h1>

            <i className="pe-7s-map-marker" />
            <span>
              {" "}
              Queens, NY,
              <br />
              United States
            </span>
            <br />
            <i className="pe-7s-mail" />
            <span> JohnP.codes@gmail.com</span>
            <br />
            <i className="pe-7s-phone" />
            <span> 646-920-5848</span>
            <br />
          </div>
        </div>
        <a
          style={{ margin: "auto", display: "block" }}
          href="https://www.testdome.com/cert/85195c8d45ba45a1a21cfb0d2dfdfa80"
          class="testdome-certificate-stamp gold"
        >
          <span class="testdome-certificate-name">John Pena</span>
          <span class="testdome-certificate-test-name">JavaScript </span>
          <span class="testdome-certificate-card-logo">
            TestDome
            <br />
            Certificate
          </span>
        </a>
      </div>
      <div id="social">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="scoialinks">
                <li className="normal-txt">Find me on</li>
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                    href={"https://www.linkedin.com/in/john-pena-7bb867b9"}
                  />
                </li>
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium"
                    href={"https://medium.com/@jpena91"}
                  />
                </li>
                <li className="social-icons">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                    href={"https://github.com/JohnAlexanderPena"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
