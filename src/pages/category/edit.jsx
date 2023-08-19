import { Link } from 'react-router-dom';
import { Button, Flex, Group, TextInput, Title } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

export default function PageCategoryEdit() {
  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Category
        </Title>

        <Button
          component={Link}
          to="/category"
          variant="outline"
          leftIcon={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input category name"
        />

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  );
}
