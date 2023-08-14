import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Group, Title, Flex, MediaQuery, NavLink } from '@mantine/core';
import {
  IconDashboard,
  IconShoe,
  IconCategory,
  IconLogout,
  IconX,
} from '@tabler/icons-react';

const data = [
  { link: '/', label: 'Dashboard', icon: IconDashboard },
  { link: '/shoe', label: 'Shoes', icon: IconShoe },
  { link: '/category', label: 'Category', icon: IconCategory },
];

export default function NavbarMain({ status, onToggle }) {
  const navigate = useNavigate();

  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <NavLink
      key={item.label}
      active={item.label === active}
      label={item.label}
      icon={<item.icon />}
      onClick={() => {
        setActive(item.label);
        navigate(item.link);
      }}
    />
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      height="100vh"
      width={{ sm: 200, lg: 300 }}
      hidden={status}
    >
      <Navbar.Section grow>
        <Group
          style={{
            marginBottom: 24,
            borderBottom: '1px solid lightgray',
            paddingBottom: 24,
          }}
        >
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            style={{ width: '100%' }}
          >
            <Flex direction="row" align="center" gap="sm">
              <IconShoe size={30} strokeWidth={2} />
              <Title order={3}>BDC Shoe</Title>
            </Flex>

            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <IconX size={30} strokeWidth={2} onClick={() => onToggle()} />
            </MediaQuery>
          </Flex>
        </Group>

        {links}
      </Navbar.Section>

      <Navbar.Section
        style={{
          marginTop: 24,
          borderTop: '1px solid lightgray',
          paddingTop: 24,
        }}
      >
        <NavLink label="Logout" icon={<IconLogout />} />
      </Navbar.Section>
    </Navbar>
  );
}
