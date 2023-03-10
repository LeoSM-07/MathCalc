import {
  Container,
  Text,
  Input,
  Row,
  Spacer,
  useInput,
  useTheme,
  Card,
  Grid,
} from "@nextui-org/react";
import { Mafs, CartesianCoordinates } from "mafs";
import Head from "next/head";

export default function ProjectileMotion() {
  return (
    <>
      <Head>
        <title>Projectile Motion</title>
      </Head>
      <Text h2>Projectile Motion Calculator</Text>
      <Card>
        <Card.Body>
          <ProjectileMotionBody />
        </Card.Body>
      </Card>
    </>
  );
}

function ProjectileMotionBody() {
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
    <Grid.Container>
      <Grid sm data-theme={type}>
        <Mafs>
          <text>{initialVelocity.value}</text>
          <CartesianCoordinates subdivisions={4} />
        </Mafs>
      </Grid>
      <Grid sm>
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
              label="Angle (??)"
              type={"number"}
            />
            <Spacer x={1} />
            <Input
              {...acceleration.bindings}
              bordered
              label="Acceleration (m/s??)"
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
      </Grid>
    </Grid.Container>
  );
}
