import { Link, redirect, useLoaderData, Form } from "react-router-dom";
import { ActionIcon, Badge, Button, Flex, Table, Title } from "@mantine/core";
import { IconEye, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";

export async function loader() {
  const response = await fetch("http://localhost:3000/shoe");
  const shoes = await response.json();

  return {
    shoes,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  await fetch(`http://localhost:3000/shoe/${id}`, {
    method: "DELETE",
  });

  return redirect("/shoe");
}

export default function PageShoeList() {
  const data = useLoaderData();

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

                  <Form method="post">
                    <input type="hidden" name="id" defaultValue={shoe.id} />
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
