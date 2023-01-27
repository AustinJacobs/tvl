import React from 'react';
// import HeroVideo from '../assets/HeroVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { Button, Text, Container, Link } from '@nextui-org/react';
import { motion } from 'framer-motion';
import '../components/styles/Home.css';

export default function Home() {
  return (
    <>
      <HeroVideoContainer>
        <video autoPlay loop muted width='100%' height='100%'>
          {/* <source src={HeroVideo} type='video/mp4' /> */}
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
                  color: '#f75a0e',
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
              <Button
                css={{
                  backgroundColor: '#F75A0E',
                  height: '50px',
                  marginTop: '1.5em',
                }}
                as={Link}
                href='/book-now'>
                <Text
                  h1
                  css={{
                    color: '#FFFFFF',
                    fontFamily: 'Roboto Condensed',
                    fontSize: '18px',
                  }}>
                  BOOK NOW
                </Text>
              </Button>
            </motion.div>
          </Container>
        </Container>
      </HeroVideoContainer>
    </>
  );
}
