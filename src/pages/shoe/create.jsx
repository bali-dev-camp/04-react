import { Link, Form, redirect } from 'react-router-dom';
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

export async function action({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  await fetch('http://localhost:3000/shoe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return redirect('/shoe');
}

export default function PageShoeCreate() {
  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Add Shoe
        </Title>

        <Button
          component={Link}
          to="/shoe"
          variant="outline"
          leftIcon={<IconArrowBack />}
        >
          Back
        </Button>
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

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input shoe price"
          name="price"
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input shoe desc"
          label="Description"
          name="desc"
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
