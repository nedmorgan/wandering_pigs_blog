import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>Wandering Pigs</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown title='Where to?' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/about'>About</NavDropdown.Item>
              <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
              <NavDropdown.Item href='/posts'>Posts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
