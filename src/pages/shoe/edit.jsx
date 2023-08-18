import { Link, Form, redirect, useLoaderData } from 'react-router-dom';
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

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/shoe/${params.id}`);
  const json = await response.json();

  return {
    shoe: json,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  await fetch(`http://localhost:3000/shoe/${params.id}`, {
    method: 'PUT',
    body: formData,
  });

  return redirect('/shoe');
}

export default function ShoeEdit() {
  const data = useLoaderData();

  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Shoe
        </Title>

        <Link to="/shoe">
          <Button variant="outline" leftIcon={<IconArrowBack />}>
            Back
          </Button>
        </Link>
      </Flex>

      <Form
        method="put"
        action={`/shoe/${data.shoe.id}/edit`}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input shoe name"
          name="name"
          defaultValue={data.shoe.name}
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
          name="merk"
          defaultValue={data.shoe.merk}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
          name="qty"
          defaultValue={data.shoe.qty}
        />

        <Radio.Group
          label="Shoe Availability"
          withAsterisk
          size="md"
          name="available"
          defaultValue={String(data.shoe.available)}
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
