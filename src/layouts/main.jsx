import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { AppShell, Container, LoadingOverlay } from "@mantine/core";

import NavbarMain from "../components/navbar";
import { HeaderMain } from "../components/header";

export default function LayoutMain() {
  const navigation = useNavigation();

  const [opened, setOpened] = useState(false);

  return (
    <>
      <LoadingOverlay
        visible={navigation.state === "loading"}
        overlayBlur={2}
      />

      <AppShell
        layout="alt"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <NavbarMain status={!opened} onToggle={() => setOpened(!opened)} />
        }
        header={<HeaderMain onToggle={() => setOpened(!opened)} />}
      >
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell>
    </>
  );
}
