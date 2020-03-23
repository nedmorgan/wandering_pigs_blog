import React, { Component } from 'react'
import { TwitterContainer } from '../styles/TwitterStyles'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed'

export default class Twitter extends Component {
  render() {
    return (
      <TwitterContainer>
        <div className='tweet-div'>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='wandering_pigs'
            options={{ height: 300 }}
          />
          <TwitterFollowButton screenName={'wandering_pigs'} />
        </div>
      </TwitterContainer>
    )
  }
}
