import React from 'react';

const Nav = () => {
  return (
    <section id="navigation">
  <div className="container">
    <div className="row">
      <div className="col-xs-6">
        <div className="logo"><a data-scroll href="#body" className="logo-text">John Alexander Peña</a></div>
      </div>
      <div className="col-xs-6">
        <div className="nav">
          <a href="none" data-placement="bottom" title="Menu" className="menu" data-toggle="dropdown"><i className="pe-7s-menu" /></a>
          <div className="dropdown-menu">
            <div className="arrow-up" />
            <ul>
              <li><a data-scroll href="#body">Home <i className="pe-7s-home" /></a><span className="menu-effect" /></li>
              <li><a data-scroll href="#services">Skills <i className="pe-7s-config" /></a><span className="menu-effect" /></li>
              <li><a data-scroll href="#portfolio">Portfolio <i className="pe-7s-glasses" /></a><span className="menu-effect" /></li>
              <li><a data-scroll href="#contact">Contact <i className="pe-7s-help1" /></a><span className="menu-effect" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Nav
