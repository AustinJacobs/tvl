import { Navbar, Link, Dropdown, Image, Text, Button } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { Layout } from '../components/styles/Layout';
import { icons } from '../assets/Icons';
import Logo from '../assets/tvl_logo.png';
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
              w: '8%',
            },
            '@sm': {
              w: '7%',
            },
            '@md': {
              w: '6%',
            },
            '@lg': {
              w: '4%',
            },
            '@xl': {
              w: '2%',
            },
          }}>
          <NavLink to='/'>
            <Image src={Logo} alt='TVL Fish Logo' />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor=''
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
                $$dropdownMenuWidth: '400px',
                $$dropdownItemHeight: '60px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}>
              <Dropdown.Item
                key='book_now'
                showFullDescription
                description='The research is done and you ready to book. This is your next step.'>
                <NavLink className='clickableArea navLink' to='/book-now'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    Book Now
                  </Text>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item
                key='trip_details'
                showFullDescription
                description='Ready to start researching your next unforgettable trip to Teton Valley Lodge? Click here!'>
                <NavLink className='clickableArea navLink' to='/trip-details'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    Trip Details
                  </Text>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item
                key='contact_us'
                showFullDescription
                description='Have a question about fishing or just want to say hi? We’d love to hear from you. Drop us a line and we will respond as soon as possible.'>
                <NavLink className='clickableArea navLink' to='/contact'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    Contact Us
                  </Text>
                </NavLink>
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
                <NavLink className='clickableArea navLink' to='/teton'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    Teton River
                  </Text>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item
                key='south_fork'
                showFullDescription
                description='If you could only fish one river the rest of your life, the South Fork of the Snake would be the river to select.'>
                <NavLink className='clickableArea navLink' to='/south-fork'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    South Fork
                  </Text>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item
                key='henrys_fork'
                showFullDescription
                description='At six thousand feet above sea-level, Henry’s Fork flows out of a spring created by volcanic events more than a millennium ago.'>
                <NavLink className='clickableArea navLink' to='/henrys-fork'>
                  <Text css={{ color: '#F75A0D', margin: '0', padding: '0' }}>
                    Henry's Fork
                  </Text>
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href='/guides'>
            <Text css={{ fontWeight: 700, color: '#506A63' }}>
              MEET OUR GUIDES
            </Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {/* <Navbar.Link hideIn={'sm'}>
            <SlPhone style={{ paddingRight: '5px', color: '#506A63' }} />
            <Text css={{ fontWeight: 700, color: '#506A63' }}>
              208-354-2386
            </Text>
          </Navbar.Link> */}
          <Navbar.Item>
            <Button
              auto
              as={Link}
              href='/book-now'
              css={{ backgroundColor: '#F75A0D' }}>
              <Text css={{ fontWeight: 700, color: '#FFFFFF' }}>BOOK NOW</Text>
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
