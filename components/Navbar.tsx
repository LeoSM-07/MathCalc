import React from "react";
import {
  Navbar,
  Button,
  Dropdown,
  Text,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/router";

interface DropdownProps {
  action: (key: React.Key) => void;
}

const disabledKeys = [
  "placeholder1",
  "placeholder2",
  "placeholder3",
  "placeholder4",
  "placeholder5",
  "placeholder6",
];

export default function NavbarItem() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const router = useRouter();
  const handleAction = (key: React.Key) => {
    router.push(`/${key.valueOf()}`);
  };
  const goHome = () => {
    router.push(`/`);
  };

  return (
    <Navbar maxWidth={"lg"} variant={"sticky"} shouldHideOnScroll={false}>
      <Navbar.Content>
        <Navbar.Item>
          <Button light color="primary" auto onClick={goHome}>
            <Text weight={"extrabold"} color="primary">
              MathCalc
            </Text>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <PhysicsDropdown action={handleAction} />
        </Navbar.Item>
        <Navbar.Item>
          <MathDropdown action={handleAction} />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
        <Navbar.Link
          hideIn={"xs"}
          href="https://github.com/LeoSM-07/MathCalc"
          target={"_blank"}
          rel={"noopener noreferrer"}
          isExternal
          underline
          color={"primary"}
        >
          Github
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

function PhysicsDropdown({ action }: DropdownProps) {
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
      <Dropdown.Menu
        aria-label="Static Actions"
        disabledKeys={disabledKeys}
        onAction={action}
      >
        <Dropdown.Section title={"Kinematics"}>
          <Dropdown.Item key="physics/projectile-motion">
            Projectile Motion
          </Dropdown.Item>
          <Dropdown.Item key="physics/1d-kinematics">
            1d Kinematics
          </Dropdown.Item>
          <Dropdown.Item key="physics/2d-kinematics">
            2d Kinematics
          </Dropdown.Item>
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

function MathDropdown({ action }: DropdownProps) {
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
      <Dropdown.Menu disabledKeys={disabledKeys} onAction={action}>
        <Dropdown.Section title={"Calculus"}>
          <Dropdown.Item key="math/derivative">Derivative</Dropdown.Item>
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
