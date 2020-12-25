// this is the about page
// here i will state the mission and what you can do with the app
// for each capability, i'd like for it to expand with an explanation using bootstrap

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import CollapseDetail from '../components/CollapseDetail'
import { Container, ListGroup, Row } from 'react-bootstrap'
import Jumbo from '../components/Jumbo'

const Details = require('../components/AboutDetails')

export default function About() {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>

      <Jumbo title={"About"} text={"Our mission is simple - we make cooking easy and we made piecemeal with every cook in mind. Below you will find the ways in which you can find the exact recipes you're looking for."}/>

      <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
      <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
      <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
      <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>

    </Container>
  )
}



