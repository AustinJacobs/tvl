import React from 'react';
import HeroImageContainer from '../../components/styles/HeroImageContainer';
import { Text, Container } from '@nextui-org/react';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/henrys_river.jpg';

export default function HenrysFork() {
  return (
    <>
      <HeroImageContainer>
        <img
          className='heroImage'
          src={HeroImage}
          alt='Fisherman on the bank.'
        />
        <Container className='heroVideoOverlay'>
          <Container
            css={{
              marginLeft: '-.5em',
              marginTop: '14em',
              padding: '0',
              '@xs': {
                marginLeft: '1.5em',
                marginTop: '26em',
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
                    marginTop: '0',
                  },
                }}>
                HENRY'S FORK
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
                A WESTERN FLY FISHING EXPERIENCE
              </Text>
            </motion.div>
          </Container>
        </Container>
      </HeroImageContainer>
    </>
  );
}
