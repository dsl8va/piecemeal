import Head from 'next/head';
import React from 'react';
import CollapseDetail from '../components/CollapseDetail';
import { Container} from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import styles from '../styles/About.module.css';

const Details = require('../components/AboutDetails')

// About page
export default function About() {
  return (
    <Container className={styles.pageContainer}>
      <Head>
        <title>About</title>
      </Head>
      <Jumbo image={"/images/kitchen12.jpg"} imageDesc={"About page picture"} title={"Our mission is simple"} text={"we empower you to filter recipes based off your specific requirements"}/>

      <span className="my-3">
        <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
        <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
        <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
        <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>
      </span>

    </Container>
  )
}



