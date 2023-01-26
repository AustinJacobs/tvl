import React from 'react';
import styled from 'styled-components';
import Grid from '../components/styles/Grid';
import Flex from '../components/styles/Flex';
import { Image } from '@nextui-org/react';
import Logo from '../assets/tvl_logo_bw.png';

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
  display: grid;
  justify-content: center;
  background-color: #ffffff;
  margin-top: 3em;
  border-top: 2px solid #ff7900;
  grid-template-rows: 1fr 50px;
`;

export default function Footer() {
  const current = new Date();
  const date = current.getFullYear();

  return (
    <FooterWrapper>
      <Grid gridTemplateColumns='1fr 1fr 1fr'>
        <Image width={100} src={Logo} alt='Default Image' />
      </Grid>
    </FooterWrapper>
  );
}
