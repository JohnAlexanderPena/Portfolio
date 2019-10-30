import React from 'react';

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
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum animi repudiandae nihil aspernatur repellat temporibus doloremque sint ea laboriosam, excepturi iure inventore rerum voluptatibus, suscipit totam, sit necessitatibus. Rerum, blanditiis. </p>
                <ul className="address">
                  <li><i className="pe-7s-map-marker" /><span>86-88 104Th St.,<br />Queens, NY 11418,<br />United States</span></li>
                  <li><i className="pe-7s-mail" /><span>jpena91@@gmail.com</span></li>
                  <li><i className="pe-7s-phone" /><span>646-920-5848</span></li>
                  <li><i className="pe-7s-global" /><span><a href="#tbd">www.johnalexanderpena.com</a></span></li>
                </ul>
              </div>
            </div>
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
