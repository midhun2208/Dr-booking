import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>         <Navbar className="bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-white'>
        <p className='content'>All Right are Reserved Under Dr booking</p>
        
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}
export default Footer