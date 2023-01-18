import { Navbar, Link, Dropdown, Image, Text, Button } from '@nextui-org/react';
import { Layout } from '../components/styles/Layout';
import { icons } from '../assets/Icons';
import Logo from '../assets/cropped-tetonvalleylodge.png';
import { SlPhone } from 'react-icons/sl';

export default function App() {
  const collapseItems = ['Customers', 'Pricing', 'Company'];

  return (
    <Layout>
      <Navbar variant='sticky' maxWidth='fluid' disableBlur>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '22%',
            },
            '@sm': {
              w: '14%',
            },
            '@md': {
              w: '14%',
            },
            '@lg': {
              w: '14%',
            },
            '@xl': {
              w: '8%',
            },
          }}>
          <Image src={Logo} alt='TVL Fish Logo' />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='red'
          hideIn='xs'
          variant='underline'>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                  fontFamily: 'Roboto Condensed',
                }}
                iconRight={icons.chevron}
                ripple={false}>
                <Text css={{ fontWeight: 700, color: '#506A63' }}>
                  BOOK YOUR TRIP
                </Text>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='Rivers'
              css={{
                marginRight: '15px',
                $$dropdownMenuWidth: '400px',
                $$dropdownItemHeight: '60px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                    color: '#F75A0D',
                  },
                },
              }}>
              <Dropdown.Item
                key='contact_us'
                showFullDescription
                description='Have a question about fishing or just want to say hi? We’d love to hear from you. Drop us a line and we will respond as soon as possible.'>
                Contact Us
              </Dropdown.Item>
              <Dropdown.Item
                key='trip_details'
                showFullDescription
                description="Ready to book the trip of a lifetime? Let's get started!">
                Trip Details
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                  fontFamily: 'Roboto Condensed',
                }}
                iconRight={icons.chevron}
                ripple={false}>
                <Text css={{ fontWeight: 700, color: '#506A63' }}>RIVERS</Text>
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='Rivers'
              css={{
                marginRight: '15px',
                $$dropdownMenuWidth: '400px',
                $$dropdownItemHeight: '60px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                    color: '#F75A0D',
                  },
                },
              }}>
              <Dropdown.Item
                key='teton_river'
                showFullDescription
                description='The Teton is more than just a river to us, it is part of everything we are.'>
                Teton River
              </Dropdown.Item>
              <Dropdown.Item
                key='south_fork'
                showFullDescription
                description='If you could only fish one river the rest of your life, the South Fork of the Snake would be the river to select.'>
                South Fork
              </Dropdown.Item>
              <Dropdown.Item
                key='henrys_fork'
                showFullDescription
                description='At six thousand feet above sea-level, Henry’s Fork flows out of a spring created by volcanic events more than a millennium ago.'>
                Henry's Fork
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link isActive href='#'>
            <Text css={{ fontWeight: 700, color: '#506A63' }}>
              MEET OUR GUIDES
            </Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link hideIn={'sm'}>
            <SlPhone style={{ paddingRight: '5px', color: '#506A63' }} />
            <Text css={{ fontWeight: 700, color: '#506A63' }}>
              208-354-2386
            </Text>
          </Navbar.Link>
          <Navbar.Item>
            <Button
              auto
              as={Link}
              href='#'
              css={{ backgroundColor: '#F75A0D' }}>
              <Text css={{ fontWeight: 700, color: '#EAEAEA' }}>BOOK NOW</Text>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              css={{
                // Hamburger menu color
                color: '#001C17',
              }}>
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href='#'>
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
