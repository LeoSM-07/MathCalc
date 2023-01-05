import Head from "next/head";
import { Button } from "@nextui-org/react";
import NavbarItem from "../components/Navbar";

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
        <Component />
      </main>
    </>
  );
}
