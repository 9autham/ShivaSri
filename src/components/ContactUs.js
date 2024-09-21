import React from 'react'
import Boat from './resources/shivasri/boat.JPG'
import './ContactUs.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { MDBInput, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';
import Profile from '../components/resources/shivasri/instagram-profile.jpg';

const ContactUs = () => {
  return (
    <>
    <div className='image-container'>
      <img className='image-class' src={Boat} alt='CoupleTower'/>
      <div className='overlay-text container'>
      <p className='display-3' >Contact Us</p>
      <h5>Your story, our lens—get in touch for exceptional photography</h5>
    </div>
    <br/>
    </div>
    <div className='container container-social-contact'>
      <div className="social-media text-center">
      <h2 className=''>Connect With Us</h2>
      <div className='mt-4 icons justify-content-evenly mb-4'>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF size={30} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter size={30}/>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaYoutube size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaEnvelope size={30} />
      </a>
      </div>
      <div className='logo'><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mohammadabad,%20Telangana+(Photosri22Studios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>    </div>
    
      <div className='contact-container contact-form'>
      <MDBValidation noValidate id='contact-form' className='text-center'>
        <h2>Get In Touch</h2>

        <MDBValidationItem invalid feedback='Please provide your name.'>
          <MDBInput 
            label='Your Name' 
            v-model='name' 
            wrapperClass='contact-input' 
            required 
            placeholder='Enter your full name'
          />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide your email.'>
          <MDBInput 
            type='email' 
            label='Email Address' 
            v-model='email' 
            wrapperClass='contact-input' 
            required 
            placeholder='Enter your email'
          />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide mail subject.'>
          <MDBInput 
            label='Subject' 
            v-model='subject' 
            wrapperClass='contact-input' 
            required 
            placeholder='Enter the subject of your message'
          />
        </MDBValidationItem>

        <MDBValidationItem invalid feedback='Please provide a message text.'>
          <MDBTextArea 
            wrapperClass='contact-input' 
            label='Message' 
            required 
            placeholder='Enter your message'
          />
        </MDBValidationItem>

        <MDBValidationItem>
        </MDBValidationItem>

        <button type='submit' color='primary' block className='contact-btn'>
          Send
        </button>
      </MDBValidation>
    </div>
    </div>
    <div>
      
    </div>
    </>
  )
}

export default ContactUs