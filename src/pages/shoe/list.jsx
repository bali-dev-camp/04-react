import { Link, useLoaderData, redirect, Form } from 'react-router-dom';
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Group,
  Modal,
  Table,
  Title,
} from '@mantine/core';
import { IconEye, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export async function loader() {
  const response = await fetch('http://localhost:3000/shoe');
  const shoes = await response.json();

  return {
    shoes,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get('id');
  await fetch(`http://localhost:3000/shoe/${id}`, {
    method: 'DELETE',
  });

  return redirect('/shoe');
}

export default function PageShoeList() {
  const data = useLoaderData();
  const [opened, { open, close }] = useDisclosure(false);
  const [deletedId, setDeletedId] = useState();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Shoe List
        </Title>

        <Button component={Link} to="/shoe/create" leftIcon={<IconPlus />}>
          Add
        </Button>
      </Flex>

      <Modal
        opened={opened}
        onClose={close}
        centered
        position={{ bottom: 20, left: 20 }}
        style={{ textAlign: 'center' }}
      >
        <Title order={3}>Are you sure to delete data?</Title>

        <Group gap="md" position="center" mt="md">
          <Button color="gray" onClick={close}>
            Cancel
          </Button>

          <Form method="post">
            <input type="hidden" name="id" defaultValue={deletedId} />
            <Button variant="filled" color="red" type="submit" onClick={close}>
              Delete
            </Button>
          </Form>
        </Group>
      </Modal>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.shoes.map((shoe) => (
            <tr key={shoe.id}>
              <td>{shoe.name}</td>
              <td>{shoe.merk}</td>
              <td>
                <Badge>{shoe.qty}</Badge>
              </td>
              <td>
                {shoe.available ? (
                  <Badge color="green">Yes</Badge>
                ) : (
                  <Badge color="red">No</Badge>
                )}
              </td>
              <td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component={Link}
                    to={`/shoe/${shoe.id}/detail`}
                    variant="filled"
                    color="green"
                  >
                    <IconEye size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component={Link}
                    to={`/shoe/${shoe.id}/edit`}
                    variant="filled"
                    color="blue"
                  >
                    <IconPencil size={20} />
                  </ActionIcon>

                  <ActionIcon
                    variant="filled"
                    color="red"
                    onClick={() => {
                      open();
                      setDeletedId(shoe.id);
                    }}
                  >
                    <IconTrash size={20} />
                  </ActionIcon>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
