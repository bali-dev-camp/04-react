import { Link, Form, redirect } from 'react-router-dom';
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

export async function action({ request }) {
  const formData = await request.formData();
  await fetch('http://localhost:3000/shoe', {
    method: 'POST',
    body: formData,
  });

  return redirect('/shoe');
}

export default function ShoeCreate() {
  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Add Shoe
        </Title>

        <Link to="/shoe">
          <Button variant="outline" leftIcon={<IconArrowBack />}>
            Back
          </Button>
        </Link>
      </Flex>

      <Form
        method="post"
        action="/shoe/create"
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input shoe name"
          name="name"
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
          name="merk"
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
          name="qty"
        />

        <Radio.Group
          label="Shoe Availability"
          withAsterisk
          size="md"
          name="available"
        >
          <Group mt="xs">
            <Radio value="true" label="Yes" />
            <Radio value="false" label="No" />
          </Group>
        </Radio.Group>

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </div>
  );
}
