import React from 'react';
import '../components/styles/TripDetails.css';
import HeroImageContainer from '../components/styles/HeroImageContainer';
import { Text, Container } from '@nextui-org/react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/trip-details/trip-details-hero.jpg';
import PageNavigation from './PageNavigation';
import styled from 'styled-components';
import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';

const DetailsGrid = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2em;
  max-width: 1000px;
  margin: 0 auto;

  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr;
    margin-top: 4em;
  }
`;

export default function TripDetails() {
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
                  '@xs': {
                    fontSize: '70px',
                  },
                }}>
                TRIP DETAILS
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
                    width: '450px',
                  },
                }}>
                CATCH WHAT YOU'VE BEEN MISSING
              </Text>
            </motion.div>
          </Container>
        </Container>
      </HeroImageContainer>
      <DetailsGrid>
        <PageNavigation />
      </DetailsGrid>
    </>
  );
}
