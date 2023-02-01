import React from 'react';
// import HeroVideo from '../assets/HeroVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { Button, Text, Container, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import '../components/styles/Home.css';
import HorizontalRule from '../components/styles/HorizontalRule';
import styled from 'styled-components';
import Fish from '../assets/fish_water.jpeg';
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

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr;
  }
`;

export default function Home() {
  return (
    <>
      <HeroVideoContainer>
        {/* <video autoPlay loop muted width='100%' height='100%'>
          <source src={HeroVideo} type='video/mp4' />
        </video> */}
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
                  '@xs': {
                    fontSize: '60px',
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
        </div>
        <Image
          css={{
            width: '300px',
            margin: '0 auto',
            '@xs': {
              width: '80%',
            },
          }}
          src={Fish}
          alt='Marilyn Monroe Potato Sack with Fish'
        />
      </HomeGrid>
    </>
  );
}
