import {
  Link,
  useLoaderData,
  redirect,
  useActionData,
  Form,
  useNavigation,
} from "react-router-dom";
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/shoe/${params.id}`);
  const shoe = await response.json();

  return {
    shoe,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  const errors = {};

  if (Number(formData.get("qty")) < 1) {
    errors.qty = "Qty should be more than zero";
  }

  if (Number(formData.get("price")) < 0) {
    errors.price = "Price should be start from zero";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await fetch(`http://localhost:3000/shoe/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/shoe");
}

export default function PageShoeEdit() {
  const data = useLoaderData();
  const errors = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Shoe
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

      <Form
        method="post"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input shoe name"
          name="name"
          required
          defaultValue={data.shoe.name}
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
          name="merk"
          required
          defaultValue={data.shoe.merk}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
          name="qty"
          required
          defaultValue={data.shoe.qty}
          error={errors?.qty}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input shoe price"
          name="price"
          required
          defaultValue={data.shoe.price}
          error={errors?.price}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input shoe desc"
          label="Description"
          name="desc"
          required
          defaultValue={data.shoe.desc}
        />

        <Radio.Group
          label="Shoe Availability"
          withAsterisk
          size="md"
          name="available"
          required
          defaultValue={String(data.shoe.available)}
        >
          <Group mt="xs">
            <Radio value="true" label="Yes" />
            <Radio value="false" label="No" />
          </Group>
        </Radio.Group>

        <Group position="left" mt="md">
          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </Group>
      </Form>
    </>
  );
}
