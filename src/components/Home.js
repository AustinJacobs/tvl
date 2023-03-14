import React from 'react';
import HeroVideo from '../assets/HeroVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { Button, Text, Container, Card, Col, Row } from '@nextui-org/react';
import { motion } from 'framer-motion';
import '../components/styles/Home.css';
import HorizontalRule from '../components/styles/HorizontalRule';
import styled from 'styled-components';
import ImageOne from '../assets/home/boat-cast-web.jpg';
import ImageTwo from '../assets/home/brian-jo-web.jpg';
import ImageThree from '../assets/home/show-fish-web.jpg';
import ImageFour from '../assets/home/action-boat-cast-web.jpg';
import ImageFive from '../assets/home/tackle-overhead-web.jpg';
import ImageSix from '../assets/home/boat-roundup-overhead-web.jpg';
import CardOne from '../assets/cards/holding-fish-card-2.jpg';
import CardTwo from '../assets/cards/guide-card.jpg';
import CardThree from '../assets/cards/shuttle-request-card.jpg';
import CardLogo from '../assets/tvl_logo_bw.png';
import Mosaic from './Mosaic';
import ScrollWheel from './ScrollWheel';

import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';


const HomeGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2em;

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4em;
  }
`;

const HomeGridTwo = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2em;

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4em;
  }
`;

const HomeGridThree = styled.div`
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
  grid-column: 1/3;
  grid-row: 2/3;
  gap: 4em;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 2em;

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Home() {
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
                TETON VALLEY LODGE
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
                YOUR IDEAL FLY FISHING VACATION
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}>
              <a
                rel='noreferrer'
                className='link'
                target='_blank'
                href='https://www.youtube.com/watch?v=uHySrFlywDc'>
                <Button
                  css={{
                    backgroundColor: '#F75A0E',
                    height: '50px',
                    marginTop: '1.5em',
                    borderRadius: '8px',
                  }}>
                  <Text
                    h1
                    css={{
                      color: '#FFFFFF',
                      fontFamily: 'Roboto Condensed',
                      fontSize: '18px',
                    }}>
                    WATCH VIDEO
                  </Text>
                </Button>
              </a>
            </motion.div>
          </Container>
        </Container>
      </HeroVideoContainer>
      <div>
        <ScrollWheel />
      </div>
      <HomeGrid>
        <div className='container'>
          <Text
            className='headline'
            css={{
              fontSize: '40px',
              '@xs': {
                fontSize: '60px',
              },
            }}>
            The Trip Of A Lifetime
          </Text>
          <Text
            className='subheading'
            css={{
              fontSize: '20px',
              '@xs': {
                fontSize: '25px',
                width: '500px',
              },
            }}>
            Explore some of the best fishing that the Gem State has to offer.
          </Text>
          <HorizontalRule />
          <Text className='paragraph'>
            On your Idaho fly fishing trip with Teton Valley Lodge, expect to
            fly fish on a different stretch of river every day. With over 25
            different sections of river fishing on three blue ribbon fisheries
            near Driggs Idaho, there are years of discovery awaiting even the
            most experienced fly fishermen. Experience Teton Valley Idaho, just
            30 minutes from Jackson Hole, Tetons and the Snake River. At six
            thousand feet above sea-level, Henry’s Fork flows out of a spring
            created by volcanic activity more than a millennium ago. The South
            Fork of the Snake is insanely gorgeous with enough trout to fill any
            fly fisherman’s net. The Teton has so many different types of water,
            from spring creek to rushing rapids.
          </Text>

          <Text className='paragraph-two paragraph'>
            Our great grandfather started guiding in 1919. We pride ourselves on
            the service and high caliber of our fly fishing lodge and dining
            facilities. We look forward to sharing with you an experience of
            great lodging, fantastic fly fishing, and breathtaking scenery. This
            Idaho fly fishing lodge has been family owned and operated for four
            generations.
          </Text>
        </div>
        {/* <Image
          css={{
            width: '300px',
            margin: '0 auto',
            '@xs': {
              width: '80%',
            },
          }}
          src={Fish}
          alt='Fish swimming under the water.'
        /> */}
        {/* <div className='hexGrid'>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
          <div className='hexGridItem'>
            <Image className='hexImage' />
          </div>
        </div> */}
        <div className='container-collage'>
          <div className='big-collage'>
            <img src={ImageTwo} alt='' />
          </div>
          <div className='vertical-collage'>
            <img src={ImageOne} alt='' />
          </div>
          <div className='vertical-collage'>
            <img src={ImageThree} alt='' />
          </div>
          <div>
            <img src={ImageFive} alt='' />
          </div>

          <div>
            <img src={ImageSix} alt='' />
          </div>
          <div className='horizontal-collage'>
            <img src={ImageFour} alt='' />
          </div>
        </div>
      </HomeGrid>
      <HomeGridTwo>
        <div className='container home-mountain-overlay centered-in-grid'>
          <Text
            className='headline-centered'
            css={{
              fontSize: '40px',
              '@xs': {
                fontSize: '60px',
              },
            }}>
            Sit Back and Relax
          </Text>
          <Text
            className='subheading-centered'
            css={{
              fontSize: '20px',
              '@xs': {
                fontSize: '25px',
              },
            }}>
            We've Got You Covered
          </Text>
          <HorizontalRule className='hr-centered' />
          <Text
            className='paragraph-centered paragraph'
            css={{
              width: '100%',
              margin: '0 auto',
              '@xs': {
                width: '300px',
              },
              '@sm': {
                width: '450px',
              },
            }}>
            With over 100 years in the industry, we know just what is needed for
            an excellent experience on these waters. We offer packages and
            services that will accommodate everyone in your group.
          </Text>
        </div>
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
                  <Text h1 color='#FFFFFF'>
                    Book Your Fly Fishing Trip
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={CardOne}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  alt='Fishing guide holding a fish towards the camera.'
                />
              </Card.Body>
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
                      className='card-logo'
                      alt='Teton Valley Fishing Lodge Black and White Logo'
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
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={CardThree}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  alt='Card example background'
                />
              </Card.Body>
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
                      className='card-logo'
                      alt='Teton Valley Fishing Lodge Black and White Logo'
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
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={CardTwo}
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  alt='Card example background'
                />
              </Card.Body>
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
                      className='card-logo'
                      alt='Teton Valley Fishing Lodge Black and White Logo'
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
        </CardsGrid>
      </HomeGridTwo>
      <HomeGridThree>
        <Mosaic />
      </HomeGridThree>
    </>
  );
}
