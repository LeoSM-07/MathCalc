import * as React from "react";
import Head from "next/head";
import { Button, Text, Card } from "@nextui-org/react";
import NavbarItem from "../components/Navbar";
import ProjectileMotion from "./physics/projectile-motion";

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
        <HomeBody />
      </main>
    </>
  );
}

function HomeBody() {
  return (
    <>
      <Head>
        <title>Projectile Motion</title>
      </Head>
      <div style={{display: "flex"}}>
        <Text h1 style={{marginInlineEnd: "0.5rem"}}>Welcome to</Text>
        <Text h1 color={"primary"}>MathCalc</Text>
      </div>
      <Card>
        <Card.Body>
          <Text h2>Placeholder</Text>
          <Text>Hello World</Text>
        </Card.Body>
      </Card>
    </>
  );
}
