import React from 'react';

const Skills = () => {

  return (
    <section id="services" className="service-area">
  <div className="container">
    <h2 className="block_title">Skills</h2>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="services">
          <div className="service-wrap">
            <i className="pe-7s-science pe-dj pe-va" />
            <h3>React.js</h3>
            <p>In Depth knowledge of React Router, Redux, and React Styling Libraries such as Semantic.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="services">
          <div className="service-wrap">
            <i className="pe-7s-graph1 pe-dj pe-va" />
            <h3>JavaScript</h3>
            <p>In Depth Knowledge of Data Structures, Algorithms, and Design Patterns</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="services">
          <div className="service-wrap">
            <i className="pe-7s-tools pe-dj pe-va" />
            <h3>Ruby on Rails</h3>
            <p>Ability to use Proper MVC design patterns using Sinatra and able to adhere to strict RESTful routing patterns for CRUD processes.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="services">
          <div className="service-wrap">
            <i className="pe-7s-note pe-dj pe-va" />
            <h3>HTML/CSS</h3>
            <p>Able to use manipulate window elements to dynamically alter styling and rendition for better web designs.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Skills
