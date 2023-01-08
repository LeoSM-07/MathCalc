import React from "react";
import Navbar from "./Navbar";
import { Container, Spacer } from "@nextui-org/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Spacer y={1} />
      <Container lg>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
