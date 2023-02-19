import React from 'react';
import styled from 'styled-components';
import { Image, Text, Button } from '@nextui-org/react';
import Logo from '../assets/tvl_logo_bw.png';
import '../components/styles/Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const LinkContainer = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 2em;
  margin-bottom: 2em;
  line-height: 1.5;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;

const FooterGridTop = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row: 1/2;
  justify-items: center;
  background-color: #181617;

  @media only screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FooterGridBottom = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  grid-row: 2/3;
  justify-items: center;
  display: flex;
  flex-direction: column;
  background-color: #181617;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
  line-height: 1.5;
  font-size: 14px;
`;

const FooterLogoDiv = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  align-self: center;
  margin-top: 2em;

  @media only screen and (min-width: 650px) {
    margin-top: 0;
  }
`;

const FooterButtonDiv = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  align-self: center;
  margin-bottom: 2em;

  @media only screen and (min-width: 650px) {
    margin-bottom: 0;
  }
`;

const FooterSocialDiv = styled.div`
  ${compose(color, space, border, typography, layout, grid)}

  display: grid;
  grid-template-columns: 50px 50px;
  margin: 0 auto;
  justify-items: center;
  margin-top: 1em;
`;

export default function Footer() {
  const current = new Date();
  const date = current.getFullYear();

  return (
    <FooterWrapper>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2 } }}
        viewport={{ once: true }}> */}
      <FooterGridTop>
        <FooterLogoDiv>
          <Link to='/'>
            <Image width='150px' src={Logo} alt='Black and White Fish Logo' />
          </Link>
        </FooterLogoDiv>
        <LinkContainer>
          <Text h1 css={{ fontSize: '30px', color: '#FFFFFF' }}>
            Drop Us A Line
          </Text>
          <FooterHr />
          <Text css={{ fontSize: '18px', color: '#FFFFFF' }}>
            3733 Adams Rd, Driggs, ID 83422
          </Text>
          <Text css={{ fontSize: '18px', color: '#FFFFFF' }}>
            +1 208-354-2386
          </Text>
          <FooterSocialDiv>
            <a
              className='developerLink'
              rel='noreferrer'
              href='https://www.instagram.com/tetonvalleylodge/'
              target='_blank'>
              <FaInstagram fontSize={23} />
            </a>

            <a
              className='developerLink'
              rel='noreferrer'
              href='https://www.facebook.com/tetonvalleylodge/'
              target='_blank'>
              <FaFacebook fontSize={23} />
            </a>
          </FooterSocialDiv>
        </LinkContainer>
        <FooterButtonDiv>
          <Link className='footerLink' to='/book-now'>
            <Button
              css={{
                backgroundColor: '#F75A0E',
                height: '50px',
              }}>
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
          </Link>
        </FooterButtonDiv>
      </FooterGridTop>
      {/* </motion.div> */}
      <FooterGridBottom>
        <Text css={{ color: '#FFFFFF' }}>© {date} Teton Valley Lodge</Text>
        <Text css={{ color: '#FFFFFF' }}>
          Website by{' '}
          <a
            rel='noreferrer'
            className='developerLink'
            href='https://austintjacobs.com/'
            target='_blank'>
            Austin Jacobs
          </a>
        </Text>
      </FooterGridBottom>
    </FooterWrapper>
  );
}
