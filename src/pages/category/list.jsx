import { Link } from 'react-router-dom';
import { ActionIcon, Button, Flex, Table, Title } from '@mantine/core';
import { IconEye, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

const elements = [
  { name: 'Sport' },
  { name: 'Casual' },
  { name: 'School' },
  { name: 'Adventure' },
];

export default function CategoryList() {
  return (
    <div>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Category List
        </Title>

        <Link to="/category/create">
          <Button leftIcon={<IconPlus />}>Add</Button>
        </Link>
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
                    href="/shoe/1/detail"
                    variant="filled"
                    color="green"
                  >
                    <IconEye size={20} />
                  </ActionIcon>

                  <ActionIcon
                    component="a"
                    href="/shoe/1/edit"
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
