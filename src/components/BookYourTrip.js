import React from 'react';
import styled from 'styled-components';
import HeroVideo from '../assets/BookNowVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { motion } from 'framer-motion';
import { Button, Text, Container, Card, Col, Row } from '@nextui-org/react';
import ScrollWheel from './ScrollWheel';

import CardOne from '../assets/cards/holding-fish-card-2.jpg';
import CardTwo from '../assets/cards/guide-card.jpg';
import CardThree from '../assets/cards/shuttle-request-card.jpg';
import CardLogo from '../assets/100-year-logo.png';

import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';

const BookNowGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2em;

  @media only screen and (min-width: 1000px) {
    margin-top: 4em;
  }
`;

const CardsGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  gap: 3em;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;

  @media only screen and (max-width: 999px) and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CardsGridTwo = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;

  @media only screen and (min-width: 1000px) {
    justify-self: center;
    max-width: 400px;
  }
`;

export default function BookYourTrip() {
  return (
    <>
      <HeroVideoContainer>
        <video autoPlay loop muted width='100%' height='100%'>
          <source src={HeroVideo} type='video/mp4' />
        </video>
        <Container className='heroVideoOverlay'>
          <Container
            css={{
              marginLeft: '-.5em',
              marginTop: '14em',
              padding: '0',
              '@xs': {
                marginLeft: '1.5em',
                marginTop: '15em',
              },
            }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}>
              <Text
                h1
                css={{
                  color: '#ffffff',
                  fontSize: '50px',
                  marginTop: '4em',
                  '@xs': {
                    fontSize: '70px',
                    marginTop: '2em',
                  },
                }}>
                LET'S GET BOOKING
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}>
              <Text
                h1
                css={{
                  color: '#F75A0E',
                  fontSize: '30px',
                  '@xs': {
                    fontSize: '40px',
                    width: '500px',
                  },
                }}>
                WESTERN ADVENTURE AWAITS
              </Text>
            </motion.div>
          </Container>
        </Container>
      </HeroVideoContainer>
      <div>
        <ScrollWheel />
      </div>
      <BookNowGrid>
        <CardsGrid>
          <motion.div
            className='card-lift'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Card css={{ w: '100%', h: '500px' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'>
                    TVL
                  </Text>
                  <Text
                    h1
                    color='#FFFFFF'
                    css={{
                      marginTop: '.5em',
                      fontSize: '40px',
                      textAlign: 'center',
                    }}>
                    3 NIGHT 2 DAY
                  </Text>
                  <Text
                    h3
                    color='#EAEAEA'
                    css={{
                      fontWeight: 'normal',
                      marginTop: '.25em',
                      textAlign: 'center',
                    }}>
                    Double Occupancy
                  </Text>
                  <Text
                    h1
                    color='#FFFFFF'
                    css={{
                      marginTop: '.25em',
                      fontSize: '55px',
                      textAlign: 'center',
                    }}>
                    $2230
                  </Text>
                  <Text
                    h3
                    color='#EAEAEA'
                    css={{
                      fontWeight: 'normal',
                      marginTop: '.25em',
                      textAlign: 'center',
                    }}>
                    Per Person
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0, backgroundColor: '#888667' }}></Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff66',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row>
                  <Col className='card-logo-container'>
                    <img
                      src={CardLogo}
                      className='card-logo-booking'
                      alt='Teton Valley Fishing Lodge 100 years logo'
                    />
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Button
                        flat
                        auto
                        rounded
                        css={{ backgroundColor: '#F75A0E' }}>
                        <Text
                          css={{ color: '#FFFFFF' }}
                          size={12}
                          weight='bold'
                          transform='uppercase'>
                          Book Now
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>

          <motion.div
            className='card-lift'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Card css={{ w: '100%', h: '500px' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'>
                    TVL
                  </Text>
                  <Text h1 color='#FFFFFF'>
                    Request a Shuttle
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0, backgroundColor: '#888667' }}></Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff66',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row>
                  <Col className='card-logo-container'>
                    <img
                      src={CardLogo}
                      className='card-logo-booking'
                      alt='Teton Valley Fishing Lodge 100 years logo'
                    />
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Button
                        flat
                        auto
                        rounded
                        css={{ backgroundColor: '#F75A0E' }}>
                        <Text
                          css={{ color: '#FFFFFF' }}
                          size={12}
                          weight='bold'
                          transform='uppercase'>
                          Request Now
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>

          <motion.div
            className='card-lift'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Card css={{ w: '100%', h: '500px' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'>
                    TVL
                  </Text>
                  <Text h1 color='#FFFFFF'>
                    Meet Our Guides
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0, backgroundColor: '#888667' }}></Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff66',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row>
                  <Col className='card-logo-container'>
                    <img
                      src={CardLogo}
                      className='card-logo-booking'
                      alt='Teton Valley Fishing Lodge 100 years logo'
                    />
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Button
                        flat
                        auto
                        rounded
                        css={{ backgroundColor: '#F75A0E' }}>
                        <Text
                          css={{ color: '#FFFFFF' }}
                          size={12}
                          weight='bold'
                          transform='uppercase'>
                          Visit Page
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>

          <motion.div
            className='card-lift'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Card css={{ w: '100%', h: '500px' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'>
                    TVL
                  </Text>
                  <Text h1 color='#FFFFFF'>
                    Request a Shuttle
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0, backgroundColor: '#888667' }}></Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff66',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row>
                  <Col className='card-logo-container'>
                    <img
                      src={CardLogo}
                      className='card-logo-booking'
                      alt='Teton Valley Fishing Lodge 100 years logo'
                    />
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Button
                        flat
                        auto
                        rounded
                        css={{ backgroundColor: '#F75A0E' }}>
                        <Text
                          css={{ color: '#FFFFFF' }}
                          size={12}
                          weight='bold'
                          transform='uppercase'>
                          Request Now
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>
        </CardsGrid>
        <CardsGridTwo>
          <motion.div
            className='card-lift'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <Card css={{ w: '100%', h: '500px' }}>
              <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight='bold'
                    transform='uppercase'
                    color='#ffffffAA'>
                    TVL
                  </Text>
                  <Text h1 color='#FFFFFF'>
                    Request a Shuttle
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0, backgroundColor: '#506A63' }}></Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: 'absolute',
                  bgBlur: '#ffffff66',
                  borderTop:
                    '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row>
                  <Col className='card-logo-container'>
                    <img
                      src={CardLogo}
                      className='card-logo-booking'
                      alt='Teton Valley Fishing Lodge 100 years logo'
                    />
                  </Col>
                  <Col>
                    <Row justify='flex-end'>
                      <Button
                        flat
                        auto
                        rounded
                        css={{ backgroundColor: '#F75A0E' }}>
                        <Text
                          css={{ color: '#FFFFFF' }}
                          size={12}
                          weight='bold'
                          transform='uppercase'>
                          Request Now
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </motion.div>
        </CardsGridTwo>
      </BookNowGrid>
    </>
  );
}
