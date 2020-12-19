

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Explore() {
  return (
    <Container>
      <Head>
        <title>Search Results</title>
      </Head>
      <Link href='/'>
      <a>Back to home</a>
      </Link>
      <div>Below are your search results!</div>
    </Container>
  )
}