import { Spacer, Text, Row, Col } from "@nextui-org/react";
import Head from "next/head";

export default function Integral() {
    return (
      <>
        <Head>
          <title>Integral</title>
        </Head>
        <Text h1>Integral Calculator</Text>
        <Spacer y={2} />
        
        <Spacer y={2} />
        <Row>
          <Col>
            <Text h1>Explanation</Text>
            
          </Col>
        </Row>
        <Spacer y={2} />
      </>
    );
  }