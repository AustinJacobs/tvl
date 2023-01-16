import { Navbar, Link, Text, Dropdown, } from '@nextui-org/react';
import { Layout } from '../components/styles/Layout';
import { AcmeLogo } from '../assets/AcmeLogo';
import { icons } from '../assets/Icons';

export default function App() {
  const collapseItems = ['Customers', 'Pricing', 'Company'];

  return (
    <Layout>
      <Navbar isCompact variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}>
          <AcmeLogo />
          <Text b color='red' hideIn='xs'>
            ACME
          </Text>
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
                  color: 'red',
                }}
                iconRight={icons.chevron}
                ripple={false}>
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='ACME features'
              css={{
                $$dropdownMenuWidth: '340px',
                $$dropdownItemHeight: '70px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  // dropdown item left icon
                  svg: {
                    color: '$secondary',
                    mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}>
              <Dropdown.Item
                key='autoscaling'
                showFullDescription
                description='ACME scales apps to meet user demand, automagically, based on load.'
                icon={icons.scale}>
                Autoscaling
              </Dropdown.Item>
              <Dropdown.Item
                key='usage_metrics'
                showFullDescription
                description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
                icon={icons.activity}>
                Usage Metrics
              </Dropdown.Item>
              <Dropdown.Item
                key='production_ready'
                showFullDescription
                description='ACME runs on ACME, join us and others serving requests at web scale.'
                icon={icons.flash}>
                Production Ready
              </Dropdown.Item>
              <Dropdown.Item
                key='99_uptime'
                showFullDescription
                description='Applications stay on the grid with high availability and high uptime guarantees.'
                icon={icons.server}>
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key='supreme_support'
                showFullDescription
                description='Overcome any challenge with a supporting team ready to respond.'
                icon={icons.user}>
                +Supreme Support
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link css={{ color: 'red' }} href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link css={{ color: 'red' }} href='#'>
            Pricing
          </Navbar.Link>
          <Navbar.Link css={{ color: 'red' }} href='#'>
            Company
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          // Positioning of the navbar items.
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}></Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              css={{
                // Hamburger menu color
                color: 'red',
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
