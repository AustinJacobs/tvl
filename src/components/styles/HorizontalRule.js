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

const HorizontalRule = styled.div`
  ${compose(color, shadow, space, border, typography, layout)}

  border: 2px solid #F75A0E;
  width: 50px;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export default HorizontalRule;
