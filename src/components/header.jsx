import { createStyles, Header, Group, Burger, rem, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export function HeaderMain() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Title order={4}>Dasboard</Title>
        </Group>
      </div>
    </Header>
  );
}
