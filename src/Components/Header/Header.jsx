import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="/" className='text-white'>
          <i class="fa-regular fa-hospital fa-beat-fade mx-1"></i>
            DrBooking
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header