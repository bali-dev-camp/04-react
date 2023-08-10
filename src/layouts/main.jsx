import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';

import NavbarMain from '../components/navbar';
import { HeaderMain } from '../components/header';

export default function LayoutMain() {
  return (
    <Flex direction="row">
      <NavbarMain />

      <Flex direction="column" w={'100%'}>
        <HeaderMain />
        <Outlet />
      </Flex>
    </Flex>
  );
}
