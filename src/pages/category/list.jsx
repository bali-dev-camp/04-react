import { Form, Link, useLoaderData, redirect } from 'react-router-dom';
import { ActionIcon, Button, Flex, Table, Title } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

export async function loader() {
  const response = await fetch('http://localhost:3000/category');
  const categories = await response.json();

  return {
    categories,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get('id');
  await fetch(`http://localhost:3000/category/${id}`, {
    method: 'DELETE',
  });

  return redirect('/category');
}

export default function PageCategoryList() {
  const data = useLoaderData();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Category List
        </Title>

        <Button component={Link} to="/category/create" leftIcon={<IconPlus />}>
          Add
        </Button>
      </Flex>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.categories.map((category) => (
            <tr key={category.name}>
              <td>{category.name}</td>
              <td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component={Link}
                    to={`/category/${category.id}/edit`}
                    variant="filled"
                    color="blue"
                  >
                    <IconPencil size={20} />
                  </ActionIcon>

                  <Form method="post">
                    <input type="hidden" name="id" defaultValue={category.id} />
                    <ActionIcon variant="filled" color="red" type="submit">
                      <IconTrash size={20} />
                    </ActionIcon>
                  </Form>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
