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
    <p>You can view my photos with a click on the button above.</p>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque elementum dui bibendum elementum fringilla curae id quisque sapien. Phasellus tempus ante et ultricies; fermentum facilisis aliquam. Sapien accumsan natoque nisi; mi egestas vestibulum inceptos pretium. Imperdiet adipiscing non mattis dignissim fringilla. Ad volutpat vel dolor dignissim cubilia sociosqu curabitur; est nisi.

Ultricies phasellus augue blandit senectus nunc faucibus fusce. Conubia aliquet hendrerit pharetra dictumst malesuada auctor ullamcorper. Eu suscipit fames odio mattis ridiculus turpis feugiat imperdiet. Aliquam himenaeos est mus aptent porta, non nibh sagittis. Praesent convallis ac diam ultrices in. Parturient consequat etiam ex arcu ullamcorper aliquam velit magnis. Sit non justo laoreet posuere luctus nisl non. Molestie hac lorem proin himenaeos; vulputate tempor aenean.</p>
  </div>
</div>

    </div>
  );
}

export default About;
