import {
  Spacer,
  Row,
  Col,
  Text,
  Collapse,
  Container,
  Card,
  useTheme,
  useInput,
  Input,
} from "@nextui-org/react";
import { Mafs, CartesianCoordinates, labelPi } from "mafs";
import * as math from "mathjs";
import Head from "next/head";
import dynamic from "next/dynamic";
import { parseTex } from 'tex-math-parser'

const MathDisplay = dynamic(() => import("../../components/Math/MathDisplay"), {
  ssr: false,
});

export default function OneDKinematics() {
  return (
    <>
      <Head>
        <title>Derivative</title>
      </Head>
      <Text h1>1D Kinematics Calculator</Text>
      <Spacer y={2} />
      <KinematicsBody />
      <Spacer y={2} />
      <Row>
        <Col>
          <Text h1>Explanation</Text>
          <ExplanationSection />
        </Col>
      </Row>
      <Spacer y={2} />
    </>
  );
}

// Raw Input Equation
const equation1 = String.raw`v=u+at`;
const equation2 = String.raw`s=ut+\frac{1}{2}at^2`;
const equation3 = String.raw`v^2=u^2+2as`;

function KinematicsBody() {
  const { type } = useTheme();
  const initialVelocity = useInput("25");
  const finalVelocity = useInput("0");
  const acceleration = useInput("-5");
  const displacement = useInput("");
  const time = useInput("");

  const equation1Parse = parseTex(equation1); 
  return (
    <Container display={"grid"}>
      <Row gap={0}>
        <Col data-theme={type}>
          <Card variant={"shadow"}>
            <Card.Body css={{ p: 0 }}>
              <Mafs pan={false}>
                <CartesianCoordinates
                  subdivisions={0}
                  xAxis={{
                    lines: math.pi,
                    subdivisions: 2,
                    labels: labelPi,
                  }}
                  yAxis={{
                    lines: 1,
                    subdivisions: 0,
                  }}
                />
              </Mafs>
            </Card.Body>
            <Card.Footer isBlurred>
              <Text>Todo: Add Graph</Text>
            </Card.Footer>
          </Card>
        </Col>
        <Spacer x={3} />
        <Col>
          <Text h2>Inputs:</Text>
          <Text>3/5 inputs are required to compute kinematics</Text>
          <Spacer y={0.8} />
          <Row>
          <Input
              {...initialVelocity}
              bordered
              label="Initial Velocity (m/s)"
              type={"number"}
            />
            <Spacer x={1} />
            <Input
              {...finalVelocity}
              bordered
              label="Final Velocity (m/s)"
              type={"number"}
            />
          </Row>
          <Spacer y={0.8} />
          <Row>
          <Input
              {...acceleration}
              bordered
              label="Acceleration (m/s²)"
              type={"number"}
            />
            <Spacer x={1} />
            <Input
              {...displacement}
              bordered
              label="Displacement (m)"
              type={"number"}
            />
          </Row>
          <Spacer y={0.8} />
          <Row>
          <Input
              {...time}
              bordered
              label="Time (s)"
              type={"number"}
            />
          </Row>
          <Spacer y={2} />
          <Text h2>Outputs:</Text>
          <Text>Time: {String(equation1Parse)}</Text>
        </Col>
      </Row>
    </Container>
  );
}

function refactorEquation(original: string): string {
  return original.replace("v", "v_f").replace("u", "v_i").replace("s", "\\Delta x")
}

function ExplanationSection() {
  return (
    <Collapse.Group accordion={false} shadow>
      <Collapse title="One Dimensional Kinematics" expanded={false}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse title="The Equations" expanded={false}>
        <Text>
          There are 3 main equations that are used to solve kinematics problems:
          <p><MathDisplay text={refactorEquation(equation1)}/></p>
          <p><MathDisplay text={refactorEquation(equation2)}/></p>
          <p><MathDisplay text={refactorEquation(equation3)}/></p>
          If<Text b> given 3 variables, these equations can be used to solve for the remaining 2 kinematics variables</Text>. 
          The kinematics variables are as follows: velocity initial, velocity final, acceleration, displacement, and time. These are
          the only variables that will appear in simple 1d kinematics problems.
        </Text>
      </Collapse>
      <Collapse title="Placeholder" disabled>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}
