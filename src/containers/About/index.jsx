import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Carousel from './components/Carousel'
import './style.css'

const ROVERS_CURIOSITY_API = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-11-1&api_key=DEMO_KEY&page=1'

const About = () => {
  const [roversCuriosityImage, setRoversCuriosityImage] = useState([])
  useEffect(() => {
    axios.get(ROVERS_CURIOSITY_API).then(response => {
      setRoversCuriosityImage(response.data.photos)
    })
    },[])

  return (
    <div className="about-page">
      <h1>About the Program</h1>
      <div className="curiosity-mission">
        <div>
          <img src={'https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg'} alt=""/>
          <div>Curiosity rover image</div>
        </div>
        <div className="text-description">
          Scientists on the Curiosity team thought it fitting to name the sampling site after Anning because of
          the area's potential to reveal details about the ancient environment. Curiosity used the rock drill
          on the end of its robotic arm to take samples from three drill holes called "Mary Anning,
          " "Mary Anning 3," and "Groken," this last one named after cliffs in Scotland's Shetland Islands.
          The robotic scientist has conducted a set of advanced experiments with those samples to extend the
          search for organic (or carbon-based) molecules in the ancient rocks .
          Since touching down in Gale Crater in 2012, Curiosity has been ascending Mount Sharp to search for
          conditions that might once have supported life. This past year, the rover has explored a region of
          Mount Sharp called Glen Torridon, which likely held lakes and streams billions of years ago. Scientists
          suspect this is why a high concentration of clay minerals and organic molecules was discovered there.
          <div className="buttons-section">
            <Link to="/ImagesByDate">View Image By Date</Link>
            <Link to="/MarsWeather">View Weather</Link>
          </div>
        </div>
      </div>
      <div className="curiosity-images">
        <h1>Curiosity rover images <span>from today</span></h1>
        <Carousel images={roversCuriosityImage} />
      </div>
    </div>
  );
}

export default About;
