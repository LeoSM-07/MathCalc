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
} from "@nextui-org/react";
import NavbarItem from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Mafs, CartesianCoordinates } from "mafs";

const Component = () => <Button>Click me</Button>;

export default function Home() {
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
  const { value, bindings } = useInput("");

  return (
    <Container gap={1}>
      <Row>
        <Col className={styles.maths}>
          <Mafs >
            <CartesianCoordinates subdivisions={4} />
          </Mafs>
        </Col>
        <Spacer x={1} />
        <Col>
          <Text h3>Input Variables</Text>
          <Text>{value}</Text>
          <Input
            {...bindings}
            bordered
            label="Initial Velocity (m/s)"
            placeholder=""
            type={"number"}
          />
        </Col>
      </Row>
    </Container>
  );
}
