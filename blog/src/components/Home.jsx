import React, { Component } from 'react'
import { HomeContainer } from '../styles/HomeStyles'
import Twitter from './Twitter'
import Carousel from 'react-bootstrap/Carousel'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1>The Wandering Pigs</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-50'
              src='./thailand.jpg'
              alt='thailand boats'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-50'
              src='./elephant.jpg'
              alt='elephants'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-50'
              src='./laos.jpg'
              alt='monk runnings next to temple'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-50'
              src='./myanmar.jpg'
              alt='three boats in myanmar river'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-50' src='./rhino.jpg' alt='two rhinos' />
          </Carousel.Item>
        </Carousel>
        <div className='social-div'>
          <Twitter />
        </div>
      </HomeContainer>
    )
  }
}
