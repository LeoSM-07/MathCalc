import { Card, Text, Button } from "@nextui-org/react";
import { string } from "mathjs";
import { Dispatch, SetStateAction, useState } from "react";
import { EditableMathField } from "react-mathquill";

import { parseTex, evaluateTex } from "tex-math-parser";

interface MathFieldProps {
  text: string;
  label?: string;
  prompt?: string;
  setText: Dispatch<SetStateAction<string>>;
}

export default function MathField(props: MathFieldProps) {
  const mathJSTree = parseTex("\\sin x");
  const update = () => {
    props.setText(`\\sin(x)\\cdot 3`);
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        {props.prompt != null ? <div>{props.prompt}</div> : <></>}
        <Card variant={"flat"} css={{ mw: "225px" }}>
          <Card.Body css={{ p: 8 }}>
            <EditableMathField
              latex={props.text}
              onChange={(mathField) => {
                props.setText(mathField.latex());
              }}
            />
          </Card.Body>
        </Card>
      </div>
      <p>MATHJSV: {props.text}</p>
      <p>MathJS: {mathJSTree.evaluate({ x: Math.PI / 2 })}</p>
      <Button onClick={update}>Test</Button>
    </>
  );
}
