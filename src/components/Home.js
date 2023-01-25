import React from 'react';
// import HeroVideo from '../assets/HeroVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { Modal, useModal, Button, Text } from '@nextui-org/react';

export default function Home() {
  const { setVisible, bindings } = useModal();
  return (
    <>
      <HeroVideoContainer>
        <video autoPlay loop muted width='100%' height='100%'>
          {/* <source src={HeroVideo} type='video/mp4' /> */}
        </video>
        <div className='heroVideoOverlay'>
          <div className='heroVideoBox'>
            <Text h1 className='heroVideoTitleOne'>
              TETON VALLEY LODGE
            </Text>
            <Text h1 className='heroVideoTitleTwo'>
              YOUR IDEAL FLY FISHING VACATION
            </Text>
            <Button
              className='heroVideoButton'
              css={{
                backgroundColor: '#F75A0E',
                width: '200px',
                height: '50px',
              }}
              onPress={() => setVisible(true)}>
              <Text h1
                css={{
                  color: '#FFFFFF',
                  fontFamily: 'Roboto Condensed',
                  fontSize: '16px',
                }}>
                WATCH VIDEO
              </Text>
            </Button>
            <Modal
              scroll
              width='600px'
              aria-labelledby='modal-title'
              aria-describedby='modal-description'
              {...bindings}>
              <Modal.Header>
                <Text id='modal-title' size={18}>
                  Modal with a lot of content
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Text id='modal-description'>
                  <iframe
                    src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width='100%'
                    height='100%'
                  />
                </Text>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  auto
                  flat
                  color='error'
                  onPress={() => setVisible(false)}>
                  Close
                </Button>
                <Button auto onPress={() => setVisible(false)}>
                  Agree
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </HeroVideoContainer>
    </>
  );
}
