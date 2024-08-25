import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Profile from './Profile'

function Navbar1() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <>
    <div className="container justify-content-between big-src">
      <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="d-flex justify-content-evenly">
            <Nav.Link href="/home" className="mx-1" >Home</Nav.Link>
            <Nav.Link href="/about" className="mx-1" >About</Nav.Link>
            <Nav.Link href="/portfolio" className="mx-1" >Portfolio</Nav.Link>
          </Nav>
          <Nav>
            <Profile/>
          </Nav>
        <Nav className="d-flex justify-content-evenly">
        <Nav.Link href="/services"  className="mx-1" >Services</Nav.Link>
        <Nav.Link href="/contact" className="mx-1">Contact Us</Nav.Link>
        <Nav.Link href="/gallery" className="mx-1">Gallery</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </div>
    <div className="small-src">
    <div className="d-flex justify-content-end">
      <div className="ms-auto">
      <Profile/>
      </div>
      <div className="ms-auto">
		<header>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Services</a>
				<a href="/#">About Us</a>
        <a href="/#">About Us</a>
        <a href="/#">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
    </div>
    </div>
    </>
	);
}

export default Navbar1;