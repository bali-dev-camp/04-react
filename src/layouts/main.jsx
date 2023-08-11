import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppShell, useMantineTheme } from '@mantine/core';

import NavbarMain from '../components/navbar';
import { HeaderMain } from '../components/header';

export default function LayoutMain() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      layout="alt"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <NavbarMain status={!opened} onToggle={(val) => setOpened(val)} />
      }
      header={<HeaderMain onToggle={(val) => setOpened(val)} />}
    >
      <Outlet />
    </AppShell>
  );
}
