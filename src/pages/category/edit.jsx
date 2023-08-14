import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  Select,
  TextInput,
  Title,
} from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

export default function CategoryEdit() {
  const categoryOptions = ['Sport', 'Casual', 'Party', 'School'];

  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Category
        </Title>

        <Link to="/shoe">
          <Button variant="outline" leftIcon={<IconArrowBack />}>
            Back
          </Button>
        </Link>
      </Flex>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input shoe name"
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
        />

        <Select
          label="Category"
          placeholder="Please choose one"
          withAsterisk
          size="md"
          data={categoryOptions}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
        />

        <Radio.Group
          name="availability"
          label="Shoe Availability"
          withAsterisk
          size="md"
        >
          <Group mt="xs">
            <Radio value="true" label="Yes" />
            <Radio value="false" label="No" />
          </Group>
        </Radio.Group>

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}
