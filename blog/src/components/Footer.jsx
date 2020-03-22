import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { FooterContainer } from '../styles/FooterStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Card className='text-center'>
          <Card.Header>
            <Link
              rel='noreferrer noopener'
              to='https://www.instagram.com/wandering_pigs/'
              target='_blank'>
              <i className='fab fa-instagram fa-2x'></i>
            </Link>
            <Link
              rel='noreferrer noopener'
              to='https://www.facebook.com/The-Wandering-Pigs-1585438015035697/'
              target='_blank'>
              <i className='fab fa-facebook fa-2x'></i>
            </Link>
            <Link
              rel='noreferrer noopener'
              to='https://twitter.com/wandering_pigs'
              target='_blank'>
              <i className='fab fa-twitter fa-2x'></i>
            </Link>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon id='icon-copyright' icon={faCopyright} />
              <Link
                className='footer-name'
                rel='noreferrer noopener'
                to='https://nedmorgan.github.io/'
                target='_blank'>
                Ned Morgan
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </FooterContainer>
    )
  }
}
