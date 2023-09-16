import { useEffect } from "react";
import {
  Link,
  redirect,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Loader,
  Table,
  Title,
  Text,
} from "@mantine/core";
import { IconEye, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

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

  const submit = useSubmit();

  function handleDelete(id) {
    modals.openConfirmModal({
      title: "Delete Shoe",
      children: (
        <Text size="sm">
          Are you sure you want to delete this shoe? This action is destructive
          and your data will lost.
        </Text>
      ),
      centered: true,
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Canceled"),
      onConfirm: () => {
        const formData = new FormData();
        formData.append("id", id);
        submit(formData, { method: "post" });
      },
    });
  }

  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state === "submitting") {
      modals.open({
        title: "Loading...",
        closeOnClickOutside: true,
        closeOnEscape: false,
        withCloseButton: false,
        children: (
          <Flex justify="center" align="center" direction="row">
            <Loader size="lg" />
          </Flex>
        ),
      });
    } else {
      modals.closeAll();
    }
  }, [navigation.state]);

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

                  {/* <Form method="post">
                    <input type="hidden" name="id" defaultValue={shoe.id} />
                    <ActionIcon variant="filled" color="red" type="submit">
                      <IconTrash size={20} />
                    </ActionIcon>
                  </Form> */}

                  <ActionIcon
                    variant="filled"
                    color="red"
                    onClick={() => handleDelete(shoe.id)}
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
