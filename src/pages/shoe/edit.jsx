import { Link, Form, redirect, useLoaderData } from 'react-router-dom';
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

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/shoe/${params.id}`);
  const json = await response.json();

  return {
    shoe: json,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  console.log(payload);
  await fetch(`http://localhost:3000/shoe/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return redirect('/shoe');
}

export default function PageShoeEdit() {
  const data = useLoaderData();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Shoe
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

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input shoe price"
          name="price"
          defaultValue={data.shoe.price}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input shoe desc"
          label="Description"
          name="desc"
          defaultValue={data.shoe.desc}
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
    </>
  );
}
