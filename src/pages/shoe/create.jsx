import {
  Link,
  redirect,
  Form,
  useNavigation,
  useActionData,
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

export async function action({ request }) {
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

  await fetch("http://localhost:3000/shoe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/shoe");
}

export default function PageShoeCreate() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const errors = useActionData();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Add Shoe
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
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
          name="merk"
          required
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
          name="qty"
          required
          error={errors?.qty}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input shoe price"
          name="price"
          required
          error={errors?.price}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input shoe desc"
          label="Description"
          name="desc"
          required
        />

        <Radio.Group
          label="Shoe Availability"
          withAsterisk
          size="md"
          name="available"
          required
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
