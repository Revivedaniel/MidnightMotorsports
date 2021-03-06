// jumbotron - carousel of photos
// if on homepage, carousel of pics of work done at shop
// if on products page, carousel of each car brand that the shop has performed work on (BMW, Subaru, Mitsubishi) that are CLICKABLE, takes you to that brands product page
import 'bootstrap/dist/css/bootstrap.min.css'
import Whitebmw from '../images/whitem3.jpg'
import BlackR35 from '../images/blackr35.jpg'
import R35swap from '../images/r35swap.jpg'
import Midnightdoor from '../images/midnightdoor.jpg'
import { Carousel } from 'react-bootstrap'
import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className='carouselbox'>
        <div className='carousel'>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block carouselImg"
                src={R35swap}
                alt="First slide"
                width='500px'
                height="600px"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block carouselImg"
                src={Whitebmw}
                alt="Second slide"
                width='500px'
                height="600px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carouselImg"
                src={BlackR35}
                alt="Third slide"
                width='500px'
                height="600px"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='aboutinfo'>
          <img src={Midnightdoor} width='100%' alt='midnight motorsports logo on a metal garage door background' />

          Midnight Motorsports is a performance shop with
          the goal to put in the best quality of work to
          your automobile. The performance of your vehicle
          is what matters to us the most, so we have the
          best people with the right passion to make sure
          the parts of your vehicle are bolted in correctly
          and that your vehicle performs the best way possible.
        </div>
      </div>
    )
  }
}
