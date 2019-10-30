import React from 'react'



const HeaderArea = () => {


    return (
      <div className="App">
        <body id="body">
      <header id="header">
        <div className="center text-center">
          <h1 className="bigheadline">John Peña</h1>
          <h4 className="subheadline">Full Stack Web Developer</h4>
        </div>
        <div className="bottom">
          <a data-scroll href="#navigation" className="scrollDown animated pulse" id="scrollToContent"><i className="pe-7s-angle-down-circle pe-va" /></a>
        </div>
      </header>
      </body>
</div>
    );
};

export default HeaderArea
