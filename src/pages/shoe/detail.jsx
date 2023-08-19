import { Link } from 'react-router-dom';
import { Button, Flex, Title, Image, Text, Badge, Group } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';

import imgShoe from '../../assets/images/shoe-example.jpg';

export default function PageShoeDetail() {
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
              <Badge color="blue"> Sport Shoe</Badge>
              <Badge color="green">Available</Badge>
            </Flex>

            <Title order={1}>Nike Happy Orange</Title>

            <Text size="xl" fs="italic">
              Quantity: 12
            </Text>

            <Title order={2} color="blue">
              Rp 200.000
            </Title>

            <Text size="md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </Text>
          </Flex>

          <Group position="left" mt="sm">
            <Button
              component="a"
              href="/shoe/1/edit"
              type="submit"
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
