import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import './NavBar.css'

function MyNavBar() {
  return (
<Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
<Container>
<div>
  <Link to="/"><img className='w-25' src={('/img/logo.png')} alt="Logo" /></Link>
</div>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="#inicio">Inicio</Nav.Link>
    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
    <Nav.Link href="#contacto">Contacto</Nav.Link>
    <Link to="/category/ejercicio">Ejercicio</Link>
    <Link to="/category/urbana">Urbanas</Link>
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