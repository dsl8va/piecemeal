// this is the about page
// here i will state the mission and what you can do with the app
// for each capability, i'd like for it to expand with an explanation using bootstrap

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import CollapseDetail from '../components/CollapseDetail'
import { Container, ListGroup, Row } from 'react-bootstrap'

const Details = require('../components/AboutDetails')

export default function About() {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Link href='/'>
      <a>Back to home</a>
      </Link>
      <div>Our mission:</div>
      <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
      <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
      <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
      <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>

    </Container>
  )
}



