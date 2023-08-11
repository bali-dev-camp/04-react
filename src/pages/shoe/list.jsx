import { Badge, Button, Flex, Table, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const elements = [
  { name: 'Dark Night', brand: 'Nike', qty: 20, availability: true },
  { name: 'Pink Venom', brand: 'Adidas', qty: 0, availability: false },
  { name: 'Blue Guard', brand: 'Vans', qty: 11, availability: true },
  { name: 'Purple Shy', brand: 'Swallow', qty: 2, availability: true },
];

export default function ShoeList() {
  return (
    <div>
      <Flex direction="row" align="center" justify="space-between">
        <Title order={3} color="blue.5">
          Shoe List
        </Title>

        <Button leftIcon={<IconPlus />}>Add</Button>
      </Flex>

      <Table mt="md">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th>Availability</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
