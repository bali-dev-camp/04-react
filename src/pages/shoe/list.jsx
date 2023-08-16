import { Link, useLoaderData } from 'react-router-dom';
import { ActionIcon, Badge, Button, Flex, Table, Title } from '@mantine/core';
import { IconEye, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

export async function loader() {
  const response = await fetch('http://localhost:3000/shoe');
  const json = await response.json();

  return {
    shoes: json,
  };
}

function ShoeList() {
  const data = useLoaderData();

  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Shoe List
        </Title>

        <Link to="/shoe/create">
          <Button leftIcon={<IconPlus />}>Add</Button>
        </Link>
      </Flex>

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
          {data.shoes.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.merk}</td>
              <td>
                <Badge>{item.qty}</Badge>
              </td>
              <td>
                {item.available ? (
                  <Badge color="green">Yes</Badge>
                ) : (
                  <Badge color="red">No</Badge>
                )}
              </td>
              <td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component="a"
                    href={`/shoe/${item.id}/detail`}
                    variant="filled"
                    color="green"
                  >
                    <IconEye size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component="a"
                    href={`/shoe/${item.id}/edit`}
                    variant="filled"
                    color="edit"
                  >
                    <IconPencil size={20} />
                  </ActionIcon>

                  <ActionIcon variant="filled" color="red">
                    <IconTrash size={20} />
                  </ActionIcon>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShoeList;
