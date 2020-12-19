// this is the root file that shows the home page

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>piecemeal</title>
      </Head>
      <Link href='/recipes/random'>
      <a>Get a random recipe</a>
      </Link>
      <div>Welcome to piecemeal. Our mission is to empower you to create delicious meals according to your tastes, diets, or even your food intolerances. Take a look at what we can offer you!</div>
    </Container>
  )
}
