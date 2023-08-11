import { useState } from 'react';
import { Header, Title, MediaQuery, Flex } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';

export function HeaderMain({ onToggle }) {
  const [opened, setOpened] = useState(false);

  function toggleMenu() {
    setOpened(!opened);
    onToggle(!opened);
  }

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Flex direction="row" align="center" gap="sm" style={{ height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <IconMenu2 size={30} strokeWidth={2} onClick={() => toggleMenu()} />
        </MediaQuery>
        <Title order={4}>Dasboard</Title>
      </Flex>
    </Header>
  );
}
