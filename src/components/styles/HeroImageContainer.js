import styled from 'styled-components';
import {
  compose,
  color,
  shadow,
  space,
  border,
  typography,
  layout,
} from 'styled-system';

const HeroVideoContainer = styled.div`
  ${compose(color, shadow, space, border, typography, layout)}

  width: 100%;
  height: 80vh;
`;

export default HeroVideoContainer;
