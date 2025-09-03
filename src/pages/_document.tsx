import {Html, Head, Main, NextScript} from "next/document";
import {Meta} from "next/dist/lib/metadata/generate/meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Meta content="width=device-width, initial-scale=1" name="viewport"/>
        <title>Obsidian代理服务</title>
      </Head>
      <body style={{margin: 'auto 20em'}}>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
