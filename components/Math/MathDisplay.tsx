import { StaticMathField } from "react-mathquill";

interface MathFieldProps {
  text: string;
}

export default function MathDisplay(props: MathFieldProps) {
  return (
    <>
      <StaticMathField>{props.text}</StaticMathField>
    </>
  );
}
