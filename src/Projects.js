import React from 'react';
// import { dollarpizza.png } from '../images'

const Projects = () => {
return (
      <section id="portfolio" className="portfolio-area">
      <div className="container">
        <h2 className="block_title">Projects</h2>
        <div className="row port cs-style-3">
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure style={{borderTop:"2px solid black"}}>
              <img src="../images/dollarpizza.png" alt="img04" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/hpIcT3D1bpc"} className="button">Video Demo</a>
              </figcaption>
              <h3>NYC Dollar Pizza Finder</h3>
            </figure>
            Built With:
           <ul>
             <li>React.js</li>
             <li>Ruby on Rails</li>
             <li>Google Maps API</li>
             <li>Material UI</li>
             <li>PostgreSQL</li>
           </ul>
           <strong><li>- Locate Dollar pizzas in the current database using google maps by pinning them on the map.</li>
           <li>- Leave reviews for places you've visited using the star system.</li>
           <li>- Add new dollar pizza places using the Google Maps geoencoding api.</li>
           <li>- Leave Comments for the pizza places.</li></strong>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/backendpizza"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/FrontEndPizza"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure style={{borderTop:"2px solid black"}}>
              <img src="../images/sneakerstore.png" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/watch?v=k1XcuJ-1P1c&feature=youtu.be"} className="button">Video Demo</a>
              </figcaption>
              <h3>Shoe Store Website</h3>
            </figure>
            Built With:
           <ul>
             <li>React.js</li>
             <li>Ruby on Rails</li>
             <li>React-Router</li>
             <li>Semantic UI</li>
             <li>PostgreSQL</li>
             <li>Strip API</li>
           </ul>
           <strong><li>- View the current database for sneakers currently for sale and details about them.</li>
           <li>- Able to add/remove selected sneaker into/from shopping cart.</li>
           <li>- Able to upload new sneaker and post it for sale.</li>
           <li>- Able to enter credit card information using Stripe API Checkout.</li></strong>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/joshrs1199/sneakerappbackend"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/joshrs1199/sneakerappfrontend"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure style={{borderTop:"2px solid black"}}>
              <img src="../images/networkingapp.png" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a href={"https://www.youtube.com/watch?v=9sX1s4ygsD8&feature=youtu.be"} className="button">Video Demo</a>
              </figcaption>
              <h3>Developers Forum Website</h3>
            </figure>
             Built With:
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDb</li>
              <li>JWT Authentication</li>
              <li>Express</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>GitHub API</li>
            </ul>
            <strong><li>- Create/Edit/Delete a full profile about yourself.</li>
            <li>- As a non-user you can view all profiles.</li>
            <li>- As a registered user you can post new posts to webapp.</li>
            <li>- You can like/unlike posts left by other people.</li>
            <li>- Used Github API to render latest repos(limited to 5).</li></strong>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/developers-networking-app"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/developers-networking-app/tree/master/client"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure style={{borderTop:"2px solid black"}}>
              <img src="../images/watches.png" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a href={"https://youtu.be/LSyhnQ3UYW4"} className="button">Video Demo</a>
              </figcaption>
              <h3>Master Watch Collection</h3>
            </figure>
            Built With:
           <ul>
             <li>Custom Built Web Scraper API</li>
             <li>React.js</li>
             <li>Ruby on Rails</li>
             <li>Redux</li>
             <li>Bootstrap</li>
           </ul>
           <strong><li>- Built a web scraper to get information to use as a database.</li>
           <li>- Able to search through hundreds of watches.</li>
           <li>- Proper rendering of watch brands, models, and sub-models.</li>
           <li>- Used redux for state management for complex database usage.</li></strong>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/watch-collection-backend"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/watch-collection-frontend"}>Front End Code</a></button>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 item-space">
            <figure style={{borderTop:"2px solid black"}}>
              <img src="../images/mealprep.png" alt="img01" />
              <figcaption>
                <span>John Peña</span>
                <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/gUMiDT_P1do"} className="button">Video Demo</a>
              </figcaption>
              <h3>Meal Prep Website</h3>
            </figure>
            Built With:
           <ul>
             <li>React.js</li>
             <li>Ruby on Rails</li>
             <li>React-Router</li>
             <li>Semantic UI</li>
             <li>PostgreSQL</li>
             <li>USDA.org API</li>
             <li>JWT Authentication</li>
             <li>Stripe API</li>
           </ul>
           <strong><li>- Designed for use as a mealprep website.</li>
           <li>- Upon registration you are given a BMI result and recommended meal package</li>
           <li>- Able to update meal package subscriptions.</li>
           <li>- Able to update BMI at anytime.</li>
           <li>- User can select individual meals and add to cart for Stripe API Checkout</li>
           <li>- User can input food they eat and get detailed nutritional information about it and record it to journal.</li>
       </strong>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/MealPrepBackEnd"}>Backend Code</a></button>
            <button className="button2"><a target="_blank" rel="noopener noreferrer" href={"https://github.com/JohnAlexanderPena/MealPrepFrontEnd"}>Front End Code</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
