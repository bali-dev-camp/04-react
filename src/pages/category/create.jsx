import { Link, Form, redirect } from "react-router-dom";
import { Button, Flex, Group, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBack } from "@tabler/icons-react";

export async function action({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  await fetch("http://localhost:3000/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/category");
}

export default function PageCategoryCreate() {
  const form = useForm({
    initialValues: {
      name: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Add Category
        </Title>

        <Button
          component={Link}
          to="/category"
          variant="outline"
          leftIcon={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Form
        method="post"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        onSubmit={(e) => {
          const validation = form.validate();
          if (validation.hasErrors) {
            e.preventDefault();
          }

          // Kalau gak ada error, lanjut prosesnya
        }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input category name"
          name="name"
          // required
          {...form.getInputProps("name")}
        />

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </>
  );
}
