import React from "react";

const Skills = () => {
  const iconStyle = {
    position: "center",
    "padding-top": "10px",
    width: "50%",
    height: "50%",
  };

  return (
    <section id="skills" className="service-area">
      <div className="container">
        <h2 className="block_title">Skills</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img src="../images/react.png" style={iconStyle} alt="React" />
                <h3>React.js</h3>
                <p>
                  Extensie knowledge of React Router, Redux, React Hooks, and
                  React styling libraries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="../images/JavaScript.png"
                  style={iconStyle}
                  alt="JavaScript"
                />

                <h3>JavaScript</h3>
                <p>
                  In Depth Knowledge of Data Structures, Algorithms, and Design
                  Patterns
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img src="../images/ruby.png" style={iconStyle} alt="Rails" />
                <h3>Ruby on Rails</h3>
                <p>
                  Knowledge of proper MVC design patterns and RESTful routing
                  patterns for CRUD processes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="../images/html.png"
                  style={iconStyle}
                  alt="HTML/CSS"
                />
                <h3>HTML/CSS</h3>
                <p>
                  Able to manipulate window elements to dynamically alter
                  styling for better web designs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img src="../images/Node.png" style={iconStyle} alt="Node" />
                <h3>Node.js</h3>
                <p>
                  Experience with building a Node backend for newest project.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F528264%2Fscreenshots%2F3140440%2Ffirebase_logo.png&f=1&nofb=1"
                  style={iconStyle}
                  alt="firebase"
                />
                <h3>Firebase</h3>
                <p>
                  Experience using firebase as a database and login/signup
                  authenticator for frontend applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="          http://techgenix.com/tgwordpress/wp-content/uploads/2018/11/ibmcloudlogo.png                  "
                  style={iconStyle}
                  alt="MongoDb"
                />
                <h3>IBM Cloud</h3>
                <p>
                  Experience with IBM Cloud services & APIS to configure
                  chatbots, video and audio analyzers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="../images/mongo.png"
                  style={iconStyle}
                  alt="MongoDb"
                />
                <h3>MongoDB</h3>
                <p>
                  Experience using MongoDB with Mongoose as a database for
                  keeping track of Node.js application data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="../images/express.png"
                  style={iconStyle}
                  alt="Express"
                />
                <h3>Express</h3>
                <p>
                  Used MVC architecture on the backend with Mongoose and
                  MongoDB.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skills">
              <div className="service-wrap">
                <img
                  src="../images/aws.png"
                  style={iconStyle}
                  alt="Amazon Web Services"
                />
                <h3>Amazon Web Services</h3>
                <p>Experience with AWS in S3,CloudFront, and Route 53</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
