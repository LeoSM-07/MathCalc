import {
  Card,
  Col,
  Container,
  Collapse,
  Row,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";
import { Text as MafsText } from "mafs";
import {
  Mafs,
  CartesianCoordinates,
  Plot,
  labelPi,
  useMovablePoint,
  Theme,
  Vector2,
  Point,
  Line,
} from "mafs";
import * as math from "mathjs";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MathField = dynamic(() => import("../../components/Math/MathField"), {
  ssr: false,
});

export default function Derivative() {
  return (
    <>
      <Head>
        <title>Derivative</title>
      </Head>
      <Text h1>Derivative Calculator</Text>
      <Spacer y={2} />
      <DerivativeBody />
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

function DerivativeBody() {
  const { type } = useTheme();

  const originalFunction = (x: number) => {
    return math.sin(x);
  };

  const derivative = (x: number) => {
    return math.derivative("sin(x)", "x").evaluate({ x: x });
  };

  const c = useMovablePoint([Math.PI / 2, 1], {
    constrain: "horizontal",
    color: `${Theme.orange}`,
  });

  const point: Vector2 = [c.x, originalFunction(c.x)];

  // Raw Input Equation
  const [rawInputEquation, setRawInputEquation] = useState("\\sin(x)");

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
                <Plot.OfX y={originalFunction} color={Theme.blue} />
                {c.element}
                <Point x={point[0]} y={point[1]} color={Theme.orange} />
                <Line.PointSlope
                  point={point}
                  slope={derivative(c.x)}
                  color={Theme.orange}
                />
                <MafsText x={Math.PI + 0.9} y={-3.2} attach={"w"} size={18.2}>
                  f(x)=({point[0].toFixed(3)}, {point[1].toFixed(3)})
                </MafsText>
                <MafsText x={Math.PI + 0.9} y={-2.7} attach={"w"}>
                  {`f'(x)=${derivative(point[0]).toFixed(3)}`}
                </MafsText>
              </Mafs>
            </Card.Body>
            <Card.Footer isBlurred>
              <Text>Graph of f(x) = sin(x)</Text>
            </Card.Footer>
          </Card>
        </Col>
        <Spacer x={3} />
        <Col>
          <Text h2>Inputs:</Text>
          <MathField
            text={rawInputEquation}
            setText={setRawInputEquation}
            prompt={"f(x) ="}
          />
          <Text>Raw Latex: {rawInputEquation}</Text>
          <Spacer y={2} />
          <Text h2>Outputs:</Text>
          <Text>Hello World</Text>
        </Col>
      </Row>
    </Container>
  );
}

function ExplanationSection() {
  return (
    <Collapse.Group accordion={false} shadow>
      <Collapse title="Derivative" expanded>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <Collapse title="Tangent Line" expanded>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
