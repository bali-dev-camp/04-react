import {
  Link,
  redirect,
  Form,
  useNavigation,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  Select,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { z } from "zod";

export async function loader() {
  const response = await fetch("http://localhost:3000/category");
  const categories = await response.json();

  return {
    categories,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  const createShoeSchema = z.object({
    name: z.string().nonempty({
      message: "Isi datanya cuk",
    }),
    merk: z.string().nonempty(),
    categoryId: z.string().nonempty(),
    qty: z.coerce.number().gt(0),
    price: z.coerce.number().gte(0),
    desc: z.string().nonempty(),
    available: z.enum(["true", "false"]),
  });

  const createShoe = createShoeSchema.safeParse(payload);
  if (!createShoe.success) {
    return { errors: createShoe.error.flatten() };
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

  const actionData = useActionData();
  const errors = actionData?.errors?.fieldErrors;

  const data = useLoaderData();

  const categoryOptions = data.categories.map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });

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
          error={errors?.name?.[0]}
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input shoe brand"
          name="merk"
          required
          error={errors?.merk?.[0]}
        />

        <Select
          label="Category"
          placeholder="Please choose one"
          withAsterisk
          size="md"
          name="categoryId"
          required
          data={categoryOptions}
          error={errors?.categoryId?.[0]}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input shoe qty"
          name="qty"
          required
          error={errors?.qty?.[0]}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input shoe price"
          name="price"
          required
          error={errors?.price?.[0]}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input shoe desc"
          label="Description"
          name="desc"
          required
          error={errors?.desc?.[0]}
        />

        <Radio.Group
          label="Shoe Availability"
          withAsterisk
          size="md"
          name="available"
          required
          error={errors?.available?.[0]}
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
