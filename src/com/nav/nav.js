import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./logo.png"
import './nav.css'
export default function nav() {
  return (
    <Navbar expand="lg" className="">
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} title='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">about us</Nav.Link>
                    <Nav.Link href="#home">Explore foods</Nav.Link>
                    <Nav.Link href="#link">Reviews</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
                <Nav className='qaqa2'>
                    <Nav.Link className='qaqa'>1800 789 123</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}
