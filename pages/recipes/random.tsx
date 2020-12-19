// this page will serve up a random recipe after making a call to the api

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'


export default function Random() {
  return (
    <Container>
      <Head>
        <title>random recipe</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div>This will show a random recipe</div>
    </Container>
  )
}
