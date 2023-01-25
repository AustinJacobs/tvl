import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.navLink:visited {
  color: '#F75A0E';
}

.navLink:link {
  color: '#F75A0E';
}

.navLink {
  text-decoration: none;
  color: '#F75A0E';
}

.clickableArea {
  display: inline-block;
  position: relative;
  z-index: 1;
  padding-right: 400px;
  padding-left: 400px;
  padding-top: 40px;
  padding-bottom: 40px;

  margin-right: -400px;
  margin-left: -400px;
  margin-top: -40px;
  margin-bottom: -40px;
}

video {
  object-fit: cover;
}

.heroVideoOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
}

.heroVideoBox {
  margin-left: 1em;
  margin-top: 16em;

  @media (min-width:600px)  {
    margin-left: 3em;
    margin-top: 12em;
  }
}

.heroVideoTitleOne {
  color: #FFFFFF;
  font-size: 50px;

  @media (min-width:600px)  {
    font-size: 60px;
  }
}

.heroVideoTitleTwo {
  color: #f75a0e;
  font-size: 30px;

  @media (min-width:600px)  {
    font-size: 40px;
    width: 500px;
  }
}

.heroVideoButton {
  margin-top: 1.5em;
}

`;

export default GlobalStyles;
