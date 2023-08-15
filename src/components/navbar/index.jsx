import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Group, Title, Flex, MediaQuery } from '@mantine/core';
import {
  IconDashboard,
  IconShoe,
  IconCategory,
  IconLogout,
  IconX,
} from '@tabler/icons-react';

import { useStyles } from './style';

const data = [
  { link: '/', label: 'Dashboard', icon: IconDashboard },
  { link: '/shoe', label: 'Shoes', icon: IconShoe },
  { link: '/category', label: 'Category', icon: IconCategory },
];

export default function NavbarMain({ status, onToggle }) {
  const navigate = useNavigate();

  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <NavLink
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
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
        <Group className={classes.header} position="apart">
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

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
