import React from 'react'
import { Container, Nav, Navbar,Offcanvas } from 'react-bootstrap'
import './form.css'

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar"  bg="light" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Resume Builder</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#" style={{color: "white"}}>React Resume Builder</Navbar.Brand>
          <Nav.Link href="#" style={{color: "white"}}>Login</Nav.Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar


