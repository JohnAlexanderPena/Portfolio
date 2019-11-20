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
                <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/hpIcT3D1bpc"} className="button">Video Demo</a>
              </figcaption>
              <h3>NYC Dollar Pizza Finder</h3>
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
              <img src="https://s3.amazonaws.com/btoimage/prism-thumbnails/uploads/2018/06/28/20180627_150147.jpg-resize-_opacity_100-frame_bg_color_FFF-h_2500-gravity_center-q_70-preserve_ratio_true-w_1400_.webp" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/watch?v=k1XcuJ-1P1c&feature=youtu.be"} className="button">Video Demo</a>
              </figcaption>
              <h3>Shoe Store Website</h3>
            </figure>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/joshrs1199/sneakerappbackend"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/joshrs1199/sneakerappfrontend"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure>
              <img src="https://www.lifewire.com/thmb/2nNGHcz-jvKDBWlXKgb1hx5e5pk=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-665146638-5aa1c20a6edd6500361782c0.jpg" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a href={"none"} className="button">Video Coming Soon</a>
              </figcaption>
              <h3>Developers Forum Website</h3>
            </figure>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/developers-networking-app"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/developers-networking-app/tree/master/client"}>Front End Code</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
