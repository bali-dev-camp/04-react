import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  TextInput,
  Title,
} from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

export default function ShoeCreate() {
  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Add Shoe
        </Title>

        <Link to="/shoe">
          <Button leftIcon={<IconArrowBack />}>Back</Button>
        </Link>
      </Flex>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextInput withAsterisk label="Name" placeholder="Input shoe name" />

        <TextInput withAsterisk label="Brand" placeholder="Input shoe brand" />

        <NumberInput
          withAsterisk
          label="Quantity"
          placeholder="Input shoe qty"
        />

        <Radio.Group name="availability" label="Shoe Availability" withAsterisk>
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
