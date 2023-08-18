import { Link } from 'react-router-dom';
import { ActionIcon, Button, Flex, Table, Title } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

const elements = [
  { name: 'Sport' },
  { name: 'Casual' },
  { name: 'School' },
  { name: 'Adventure' },
];

export default function PageCategoryList() {
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
          {elements.map((element) => (
            <tr key={element.name}>
              <td>{element.name}</td>
              <td style={{ width: 150 }}>
                <Flex gap="sm">
                  <ActionIcon
                    component="a"
                    href="/category/1/edit"
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
    </>
  );
}
