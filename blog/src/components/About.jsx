import React, { Component } from 'react'
import { AboutContainer } from '../styles/AboutStyles'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
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
        <Card>
          <Card.Header className='about-title'>
            About The Wandering Pigs
          </Card.Header>
          <Card.Body>
            <Card.Text>
              I'm baby put a bird on it helvetica enamel pin pour-over poke
              shaman brooklyn artisan leggings stumptown tilde gastropub
              chicharrones. Fanny pack sriracha chambray, affogato godard
              activated charcoal authentic kinfolk tofu taiyaki. Bicycle rights
              thundercats post-ironic, vape bespoke vinyl taiyaki pour-over
              fanny pack chicharrones wolf mixtape ennui. Bitters hell of 8-bit
              taiyaki taxidermy.
            </Card.Text>
            <Card.Text>
              Man bun activated charcoal thundercats knausgaard deep v
              asymmetrical. Adaptogen blog beard, yuccie butcher kombucha tbh af
              chicharrones irony biodiesel. Stumptown fixie taxidermy food truck
              mlkshk deep v semiotics blue bottle austin gastropub brunch vegan
              beard sriracha. Wolf cardigan health goth, viral vexillologist
              cliche roof party thundercats ugh hammock occupy twee messenger
              bag. Meditation keytar affogato, vexillologist bitters cliche
              freegan shaman williamsburg sustainable.
            </Card.Text>
            <Card.Text>
              Knausgaard meh squid tumeric seitan shabby chic enamel pin artisan
              kombucha. Cred slow-carb gastropub master cleanse. Fixie
              flexitarian succulents, marfa microdosing polaroid mustache
              normcore prism plaid. Try-hard kickstarter subway tile, seitan
              church-key shoreditch fam PBR&B raclette taiyaki celiac cred
              hoodie. Organic kombucha crucifix, narwhal portland raclette
              sustainable hot chicken freegan lyft pok pok artisan distillery.
              Roof party migas flannel kogi, man braid kinfolk raclette
              listicle. Hexagon pug bicycle rights forage health goth enamel pin
              meh literally banh mi blue bottle.
            </Card.Text>
          </Card.Body>
        </Card>
      </AboutContainer>
    )
  }
}
