// this is the base HTML template that Next uses for every page
// this is only executed on the server side for SSR

import Document, { Html, Head, Main, NextScript } from 'next/document'

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