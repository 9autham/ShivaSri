import React from "react";
import "./About.css";
import Profile from "../components/resources/shivasri/instagram-profile.jpg";
import AboutFooter from '../components/resources/AboutFooter.jpeg';
import { useNavigate } from 'react-router-dom';
import { HR } from "flowbite-react";

  const About = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/contact');
    };
  return (
    <div>
      <div className="about-container">
        <div className="about-image">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="about-description">
          <h2>Hello, I’m Photosri22.</h2>
          <p>
            I’m a photographer based in Mahammadabad, Mahabubnagar, with over
            six years of experience capturing life’s most precious moments. My
            expertise spans wedding photography, family portraits, events, and
            commercial films, with a focus on creating timeless images that
            reflect unique stories and emotions. Whether it's a special occasion
            or a commercial project, I’m passionate about turning visions into
            reality.
          </p>
          <p>
            If you enjoy my work, I invite you to explore my Instagram for the
            latest projects, behind-the-scenes moments, and creative journeys.
            Feel free to follow me for updates and reach out via my social media
            handles—I’d love to connect!
          </p>
        </div>
      </div>

      <div className="divider-container">
      <hr className="line-divider" />
    </div>

      <div className="about-footer-container">
      <img
        src={AboutFooter}
        alt="Background"
        className="about-footer-image"
      />
      <button className="about-footer-button" onClick={handleButtonClick}>
        Get in Touch
      </button>
    </div>

    <div className="divider-container">
      <hr className="line-divider" />
    </div>


    </div>
  );
}

export default About;
