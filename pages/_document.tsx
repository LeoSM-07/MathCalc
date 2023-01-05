import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline, useTheme } from "@nextui-org/react";

export default function Document() {
  const { theme } = useTheme();
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
