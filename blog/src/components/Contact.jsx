import React, { Component } from 'react'
import { ContactContainer } from '../styles/ContactStyles'
import ReCAPTCHA from 'react-google-recaptcha'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
require('dotenv').config()

function onChange(value) {
  console.log('Captcha value:', value)
}

export default class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control type='text' placeholder='Boaty McBoatface' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>
              <b>Message</b>
            </Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <ReCAPTCHA
            className='captcha'
            sitekey={`${process.env.SITE_KEY}`}
            onChange={onChange}
          />
        </Form>
      </ContactContainer>
    )
  }
}
