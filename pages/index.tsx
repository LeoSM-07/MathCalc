import * as React from "react";
import Head from "next/head";
import { Button, Container, Text, Card, Spacer } from "@nextui-org/react";
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
        <ProjectileMotion />
      </main>
    </>
  );
}
