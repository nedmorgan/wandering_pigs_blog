import React, { Component } from 'react'
import { HomeContainer } from '../styles/HomeStyles'
import Twitter from './Twitter'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1>The Wandering Pigs</h1>
        <div className='content-container'>
          <div className='posts-container'>Placeholder</div>
          <div className='social-container'>
            <Twitter />
          </div>
        </div>
      </HomeContainer>
    )
  }
}
