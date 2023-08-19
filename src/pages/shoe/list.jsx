import { Link } from 'react-router-dom';
import { ActionIcon, Badge, Button, Flex, Table, Title } from '@mantine/core';
import { IconEye, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

const elements = [
  { name: 'Dark Night', brand: 'Nike', qty: 20, availability: true },
  { name: 'Pink Venom', brand: 'Adidas', qty: 0, availability: false },
  { name: 'Blue Guard', brand: 'Vans', qty: 11, availability: true },
  { name: 'Purple Shy', brand: 'Swallow', qty: 2, availability: true },
];

export default function PageShoeList() {
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
          {elements.map((element) => (
            <tr key={element.name}>
              <td>{element.name}</td>
              <td>{element.brand}</td>
              <td>
                <Badge>{element.qty}</Badge>
              </td>
              <td>
                {element.availability ? (
                  <Badge color="green">Yes</Badge>
                ) : (
                  <Badge color="red">No</Badge>
                )}
              </td>
              <td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component={Link}
                    to="/shoe/1/detail"
                    variant="filled"
                    color="green"
                  >
                    <IconEye size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component={Link}
                    to="/shoe/1/edit"
                    variant="filled"
                    color="blue"
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
    </>
  );
}
