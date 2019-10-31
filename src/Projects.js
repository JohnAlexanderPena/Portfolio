import React from 'react';

const Projects = () => {
return (
      <section id="portfolio" className="portfolio-area">
      <div className="container">
        <h2 className="block_title">Projects</h2>
        <div className="row port cs-style-3">
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
              <img src="http://i.imgur.com/a2ziX.jpg" alt="img04" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/Ogd-7ScQ6Lk"} className="button">Video Demo</a>
              </figcaption>
              <h3>NYC Dollar Pizza</h3>
            </figure>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/backendpizza"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/FrontEndPizza"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
              <img src="https://cdn-img.health.com/sites/default/files/styles/master_4_3/public/styles/main/public/sb10066792a-001.jpg?itok=Zl-O6qIU" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/gUMiDT_P1do"} className="button">Video Demo</a>
              </figcaption>
              <h3>Meal Prep Website</h3>
            </figure>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/MealPrepBackEnd"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/MealPrepFrontEnd"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
              <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20130499.jpg" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a href="NothingHereChief" className="button">In Progress</a>
              </figcaption>
              <h3>Networking Website in Progress....</h3>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
