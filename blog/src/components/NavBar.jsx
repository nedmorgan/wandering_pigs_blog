import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavContainer } from '../styles/NavStyles'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <Navbar bg='light' expand='lg'>
          <Link to='/'>
            <Image className='brand-icon' src='./pigs.png' roundedCircle />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown
                className='drop-text'
                title='Where to?'
                id='basic-nav-dropdown'>
                <NavDropdown.Item href='/about'>About</NavDropdown.Item>
                <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavContainer>
    )
  }
}
