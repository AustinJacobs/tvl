import React from 'react';
// import HeroVideo from '../assets/HeroVideo.mp4';
import HeroVideoContainer from './styles/HeroVideoContainer';
import { Modal, Button, Text } from '@nextui-org/react';
import { motion } from 'framer-motion';
import '../components/styles/Home.css'

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <>
      <HeroVideoContainer>
        <video autoPlay loop muted width='100%' height='100%'>
          {/* <source src={HeroVideo} type='video/mp4' /> */}
        </video>
        <div className='heroVideoOverlay'>
          <div className='heroVideoBox'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}>
              <Text h1 className='heroVideoTitleOne'>
                TETON VALLEY LODGE
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 2 } }}
              viewport={{ once: true }}>
              <Text h1 className='heroVideoTitleTwo'>
                YOUR IDEAL FLY FISHING VACATION
              </Text>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 2 } }}
                viewport={{ once: true }}>
                <Button
                  className='heroVideoButton'
                  css={{
                    backgroundColor: '#F75A0E',
                    width: '200px',
                    height: '50px',
                  }}
                  onPress={handler}>
                  <Text
                    h1
                    css={{
                      color: '#FFFFFF',
                      fontFamily: 'Roboto Condensed',
                      fontSize: '16px',
                    }}>
                    WATCH VIDEO
                  </Text>
                </Button>
              </motion.div>
              <Modal
                closeButton
                blur
                aria-labelledby='modal-title'
                open={visible}
                onClose={closeHandler}
                css={{ backgroundColor: '#181617' }}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                  {/*Add Modal content here */}</Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </HeroVideoContainer>
    </>
  );
}
