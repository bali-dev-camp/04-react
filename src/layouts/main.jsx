import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Container } from '@mantine/core';

import NavbarMain from '../components/navbar';
import { HeaderMain } from '../components/header';

export default function LayoutMain() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      layout="alt"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <NavbarMain status={!opened} onToggle={() => setOpened(!opened)} />
      }
      header={<HeaderMain onToggle={() => setOpened(!opened)} />}
    >
      <Container size="xl">
        <Outlet />
      </Container>
    </AppShell>
  );
}
