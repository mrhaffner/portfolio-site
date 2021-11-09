import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            //@ts-ignore
            crossOrigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body style={{ fontFamily: 'Raleway, sans-serif' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
