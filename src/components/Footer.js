import React from 'react';
import styled from 'styled-components';
import Grid from '../components/styles/Grid';
import { Container, Image, Link, Text } from '@nextui-org/react';
import Logo from '../assets/tvl_logo_bw.png';
import '../components/styles/Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import {
  compose,
  color,
  space,
  border,
  typography,
  layout,
  grid,
} from 'styled-system';

const FooterWrapper = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  width: 100%;
  height: 100%
  display: grid;
  justify-content: center;
  margin-top: 3em;
  grid-template-rows: 1fr 50px;
`;

const FooterHr = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  border: 1px solid #F75A0E;
  width: 50px;
  margin: 0 auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export default function Footer() {
  const current = new Date();
  const date = current.getFullYear();

  return (
    <FooterWrapper>
      <Container
        fluid
        css={{
          backgroundColor: '#888667',
          paddingTop: '2em',
          paddingBottom: '2em',
          margin: '0',
        }}>
        <Grid
          gridTemplateColumns='1fr'
          gridRow='1/2'
          style={{ justifyItems: 'center' }}>
          <Image width={100} src={Logo} alt='Default Image' />
          <Text
            css={{
              marginTop: '1em',
              fontWeight: 700,
              color: '#FFFFFF',
              fontSize: '20px',
              textAlign: 'center',
            }}>
            Drop Us A Line
          </Text>
          <FooterHr />
          <Text
            css={{
              fontWeight: 700,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '.5em',
            }}>
            208-354-2386
          </Text>
          <Text
            css={{
              fontWeight: 700,
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '.5em',
            }}>
            <Link
              css={{ color: '#FFFFFF' }}
              href='https://www.google.com/maps/place/3733+Adams+Rd,+Driggs,+ID+83422/@43.6691139,-111.1688596,17z/data=!4m6!3m5!1s0x53539f51a6eba411:0x7aeb1ff14a94a084!8m2!3d43.6691139!4d-111.1688596!16s%2Fg%2F11g0ljjfdc'>
              3733 Adams Rd, Driggs, ID 83422
            </Link>
          </Text>
          <Grid
            gridTemplateColumns='1fr 1fr'
            style={{
              width: '100px',
              alignSelf: 'center',
              justifyItems: 'center',
              marginTop: '1em',
            }}>
            <FaInstagram fontSize='25px' color='#FFFFFF' />
            <FaFacebook fontSize='25px' color='#FFFFFF' />
          </Grid>
        </Grid>
      </Container>
      <Container
        fluid
        css={{
          backgroundColor: '#001C17',
          paddingBottom: '1em',
          paddingTop: '1em',
          margin: '0',
        }}>
        <Grid gridTemplateColumns='1fr' gridRow='2/3' style={{ width: '100%' }}>
          <Container>
            <Text
              css={{
                color: '#FFFFFF',
                fontSize: '14px',
                textAlign: 'center',
              }}>
              © {date} Teton Valley Lodge<span className='verticalBreak'></span>
              Website by <span> </span>
              <Link target='_blank' className='developerTag' href='https://austintjacobs.com/'>
                Austin Jacobs
              </Link>
            </Text>
          </Container>
        </Grid>
      </Container>
    </FooterWrapper>
  );
}
