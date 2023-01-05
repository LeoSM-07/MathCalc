import { Navbar, Button, Dropdown, Text } from "@nextui-org/react";

export default function NavbarItem() {
  return (
    <Navbar maxWidth={"lg"} variant={"floating"}>
      <Navbar.Content>
        <Navbar.Brand>
          <Text b>MathCalc</Text>
        </Navbar.Brand>
        <Navbar.Item>
          <PhysicsDropdown />
        </Navbar.Item>
        <Navbar.Item>
          <MathDropdown />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

function PhysicsDropdown() {
  return (
    <Dropdown isBordered>
      <Dropdown.Button
        auto
        light
        css={{
          px: 0,
          dflex: "center",
          svg: { pe: "none" },
        }}
        ripple={false}
      >
        Physics
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Section title={"Kinematics"}>
          <Dropdown.Item key="projectileMotion">
            Projectile Motion
          </Dropdown.Item>
          <Dropdown.Item key="1dKinematics">1d Kinematics</Dropdown.Item>
          <Dropdown.Item key="2dKinematics">2d Kinematics</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title={"Forces"}>
          <Dropdown.Item key="placeholder1">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder2">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder3">To add</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function MathDropdown() {
  return (
    <Dropdown isBordered>
      <Dropdown.Button
        auto
        light
        css={{
          px: 0,
          dflex: "center",
          svg: { pe: "none" },
        }}
        ripple={false}
      >
        Math
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Section title={"Derivatives"}>
          <Dropdown.Item key="placeholder4">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder5">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder6">To add</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title={"Integrals"}>
          <Dropdown.Item key="placeholder1">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder2">To add</Dropdown.Item>
          <Dropdown.Item key="placeholder3">To add</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}
