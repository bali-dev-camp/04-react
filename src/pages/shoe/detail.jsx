import { Link, useLoaderData } from 'react-router-dom';
import { Button, Flex, Title, Image, Text, Badge, Group } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

import imgShoe from '../../assets/images/shoe-example.jpg';

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/shoe/${params.id}`);
  const json = await response.json();

  return {
    shoe: json,
  };
}

export default function PageShoeDetail() {
  const data = useLoaderData();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Detail Shoe
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

      <Flex align="center" gap="xl">
        <Image maw={450} radius="md" src={imgShoe} alt="Shoe img" />

        <Flex direction="column" gap="xs">
          <Flex direction="column" gap="xs" style={{ width: 500 }}>
            <Flex>
              {data.shoe.available ? (
                <Badge color="green">Available</Badge>
              ) : (
                <Badge color="red">Unavailable</Badge>
              )}
            </Flex>

            <Title order={1}>{data.shoe.name}</Title>

            <Text size="xl" fs="italic">
              Quantity: {data.shoe.qty}
            </Text>

            <Title order={2} color="blue">
              Rp {data.shoe.price}
            </Title>

            <Text size="md">{data.shoe.desc}</Text>
          </Flex>

          <Group position="left" mt="sm">
            <Button
              component={Link}
              to={`/shoe/${data.shoe.id}/edit`}
              color="gray"
              variant="outline"
            >
              Edit Shoe
            </Button>
          </Group>
        </Flex>
      </Flex>
    </>
  );
}
