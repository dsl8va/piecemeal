// this is the about page
// here i will state the mission and what you can do with the app
// for each capability, i'd like for it to expand with an explanation using bootstrap

import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import CollapseDetail from '../components/CollapseDetail'
import { Container, ListGroup, Row, Image } from 'react-bootstrap'
import Jumbo from '../components/Jumbo'
import styles from '../styles/About.module.css';

const Details = require('../components/AboutDetails')

export default function About() {
  return (
    <Container className={styles.pageContainer}>
      <Head>
        <title>About</title>
      </Head>
      <Jumbo image={"/images/kitchen12.jpg"} imageDesc={"About page picture"} title={"Our mission is simple"} text={"we empower you to filter recipes based off your specific requirements"}/>
      {/* <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/images/kitchen12.jpg"
          alt="About page picture"
          // width={"100%"}
          // height={200}
          fluid
        />
        <h1 className={styles.imageTitle}>Our mission is simple</h1>
        <h3 className={styles.imageText}>we empower you to filter recipes based off your specific requirements</h3>
      </div> */}
      <span className="my-3">
        <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
        <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
        <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
        <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>
      </span>

    </Container>
  )
}



