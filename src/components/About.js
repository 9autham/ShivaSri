import React from 'react';
import './About.css';
import Profile from '../components/resources/shivasri/instagram-profile.jpg'

function About() {
  return (
    <div>
        <div className="about-container">
  <div className="about-image">
    <img src={Profile} alt="Profile" />
  </div>
  <div className="about-description">
    <h2>Hello, I’m Photosri22.</h2>
    <p>I’m a photographer living in Mahammadabad Mahabubnagar. I am a fan of Varun Adhitya, design, and arts. I’m also interested in travel and movies.</p>
    <p>I've dedicated over six years to capturing the beauty of life's most precious moments. With a keen eye for detail and a love for design, I specialize in wedding photography, family portraits, events, and commercial films. My goal is to create timeless images that reflect your unique story and evoke lasting emotions. Let's collaborate to turn your vision into reality and create memories that will be cherished for generations to come.</p>
    <p>As a passionate photographer, I love capturing moments that tell stories. If you enjoy my work, I invite you to explore more on my Instagram, where you'll find my latest projects, behind-the-scenes moments, and creative journeys. Don't forget to follow along for updates, and feel free to reach out to me through any of my social media handles—I’d love to connect and hear from you!</p>
    </div>
</div>

    </div>
  );
}

export default About;
