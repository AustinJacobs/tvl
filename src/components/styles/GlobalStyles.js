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

body {
  margin: 0;
  font-family: 'Roboto Condensed', sans-serif;
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

.heroImage {
    position: relative;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.link {
  color: #ffffff;
  text-decoration: none;
}

.heroVideoOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
}

.headline {
  color: #888667;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
}

.subheading {
  color: #181617;
  font-family: 'Lora', serif;
}

.paragraph {
  color: #181617;
  font-family: 'Lora', serif;
}

.container {
  margin: 2em;

  @media only screen and (min-width: 650px) {
    margin: 4em;
  }
}


`;

export default GlobalStyles;
