import * as React from "react";
import Head from "next/head";
import {
  Button,
  Container,
  Text,
  Card,
  Spacer,
  Col,
  Row,
  Input,
  useInput,
  useTheme,
} from "@nextui-org/react";
import NavbarItem from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Mafs, CartesianCoordinates } from "mafs";

const Component = () => <Button>Click me</Button>;

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>MathCalc</title>
        <meta
          name="description"
          content="General purpose equation calculator."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavbarItem />
        <Spacer y={1} />
        <Container lg>
          <Text h2>Projectile Motion Calculator</Text>
          <Card>
            <Card.Body>
              <ProjectileMotion />
            </Card.Body>
          </Card>
        </Container>
      </main>
    </>
  );
}

function ProjectileMotion() {
  const initialVelocity = useInput("");
  const initialVelocityX = useInput("");
  const initialVelocityY = useInput("");
  const finalVelocity = useInput("");
  const angle = useInput("");
  const acceleration = useInput("");
  const time = useInput("");

  function calculateDirectionalVelocity() {
    initialVelocityY.setValue(String(Math.sin(Number(angle))));
    console.log(String(Math.sin(Number(angle))));
  }

  const { type } = useTheme();
  return (
    <Container gap={0.5}>
      <Row data-theme={type}>
        <Col className={styles.maths}>
          <Mafs>
            <text>{initialVelocity.value}</text>
            <CartesianCoordinates subdivisions={4} />
          </Mafs>
        </Col>
        <Spacer x={1} />
        <Col>
          <Container>
            <Row>
              <Text h3>Input Variables</Text>
            </Row>
            <Row>
              <Input
                {...initialVelocityX.bindings}
                bordered
                label="Initial Velocity X (m/s)"
                type={"number"}
              />
              <Spacer x={1} />
              <Input
                {...initialVelocity.bindings}
                bordered
                label="Initial Velocity (m/s)"
                type={"number"}
                onChange={calculateDirectionalVelocity}
              />
            </Row>
            <Spacer y={1} />
            <Row>
              <Input
                {...initialVelocityY.bindings}
                bordered
                label="Initial Velocity Y (m/s)"
                type={"number"}
              />
              <Spacer x={1} />
              <Input
                {...finalVelocity.bindings}
                bordered
                label="Final Velocity (m/s)"
                type={"number"}
              />
            </Row>
            <Spacer y={1} />
            <Row>
              <Input
                {...angle.bindings}
                bordered
                label="Angle (°)"
                type={"number"}
              />
              <Spacer x={1} />
              <Input
                {...acceleration.bindings}
                bordered
                label="Acceleration (m/s²)"
                type={"number"}
              />
            </Row>
            <Spacer y={1} />
            <Row>
              <Input
                {...time.bindings}
                bordered
                label="Time (s)"
                type={"number"}
              />
              <Spacer x={1} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
