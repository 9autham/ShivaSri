import React from 'react'
import './FooterBar.css';
import AutoPlayCarousel from './AutoPlayCarousel';

function FooterBar() {
  return (
    <div className='footer-bar'>
        <AutoPlayCarousel/>
        <div className="container">
    <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-3 mb-3">
        <h5>Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/home" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="/portfolio" className="nav-link p-0 text-muted">Portfolio</a></li>
          <li className="nav-item mb-2"><a href="/services" className="nav-link p-0 text-muted">Services</a></li>
          <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="/gallery" className="nav-link p-0 text-muted">Gallery</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-3">
        <h5>Contact Info</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="tel:+919010670409" className="nav-link p-0 text-muted"><i class="fa-solid fa-phone"></i> +91 90106 70409</a></li>
          <li className="nav-item mb-2"><a href="mailto:shivasri263@gmail.com" className="nav-link p-0 text-muted"><i class="fa-solid fa-envelope"></i> shivasri263@gmail.com</a></li>
          <li className="nav-item mb-2 p-0 text-muted">Mohammadabad, Telangana</li>
          {/* <li className="nav-item mb-2 p-0 text-muted">Pricing</li>
          <li className="nav-item mb-2 p-0 text-muted">Pricing</li> */}
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 PhotoSri22Studios, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/photosri22studios/"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook fa-xl"></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-youtube fa-xl"></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-x-twitter fa-xl"></i></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><i class="fa-solid fa-envelope fa-xl"></i></a></li>
      </ul>
    </div>
    <p class="d-flex justify-content-center align-items-center">
    Developed by Gautham <a className="text-muted" href='mailto:9autham436@gmail.com'><i class="fa-solid fa-envelope fa-xs ms-2"></i></a>
</p> 
</footer>
</div>
    </div>
  )
}

export default FooterBar