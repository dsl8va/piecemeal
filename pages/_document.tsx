import Document, { Html, Head, Main, NextScript } from 'next/document';

// Base HTML template used for every page
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A food site that helps you discover new recipes" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}