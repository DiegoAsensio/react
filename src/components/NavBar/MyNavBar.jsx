import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget'

function MyNavBar() {
  return (
<Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
<Container>
<div>
  <img className='w-25' src={('/img/logo.png')} alt="Logo" />
</div>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#inicio">Inicio</Nav.Link>
    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
    <Nav.Link href="#contacto">Contacto</Nav.Link>
  </Nav>
  <div>
    <CartWidget items={0} />
  </div>
</Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default MyNavBar