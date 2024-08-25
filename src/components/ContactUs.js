import React from 'react'
import Couple from './resources/coupletower.jpg'
import './ContactUs.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MDBInput, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';

const ContactUs = () => {
  return (
    <>
    <div className='image-container'>
      <img className='image-class' src={Couple} alt='CoupleTower'/>
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
      </div>
      {/* <img src={Logo} className= 'logo' style={{ height: '20rem', width: '20rem', padding: '2px' }} alt='Profile'/> */}
    </div>
    
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