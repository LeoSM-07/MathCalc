import React from "react";
import { Navbar, Button, Dropdown, Text, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

interface DropdownProps {
  selection: string;
}

export default function NavbarItem() {
  const [selection, setSelection] = React.useState("Hello World");
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar maxWidth={"lg"} variant={"floating"} shouldHideOnScroll>
      <Navbar.Content>
        <Navbar.Brand>
          <Text b>MathCalc</Text>
        </Navbar.Brand>
        <Navbar.Item>
          <PhysicsDropdown selection={selection} />
        </Navbar.Item>
        <Navbar.Item>
          <MathDropdown />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
        <Navbar.Item hideIn={"xs"}>
          <Button auto flat href="#">
            {type}
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}

function PhysicsDropdown({ selection }: DropdownProps) {
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

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
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

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
      <Dropdown.Menu>
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
