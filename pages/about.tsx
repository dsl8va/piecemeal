import Head from 'next/head';
import React from 'react';
import CollapseDetail from '../components/CollapseDetail';
import { Col, Container, Row} from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import styles from '../styles/about.module.css';

const Details = require('../components/AboutDetails')

// About page
export default function About() {
  return (
    <Container className={styles.pageContainer}>
      <Head>
        <title>About</title>
      </Head>
      <Jumbo image={"/images/kitchen12.jpg"} imageDesc={"About page picture"} title={"Our mission is simple"} text={"we empower you to filter recipes based off your specific requirements"}/>
      <Row className="justify-content-md-center">
        <Col xs lg="4" className={styles.aboutText}>
          <h3 className={styles.header}>Our Story</h3>
          <p>Piecemeal is a cooking application that goes the extra mile.Beyond typical cooking application offerings, we allow you to make powerful custom searches that find recipes according to cuisines, food allergies, available ingredients, and most importantly, up to 40 macro/micro nutrients. Whether you have specific diet goals, require certain nutrient intake, or live with a food allergy, we have a recipe just for you!</p>
          <h3 className={styles.header}>Problem</h3>
          <p>Globally, about 250 million people suffer from a food allergy - 32 million of them reside in the US. Between the years of 2015-2018, 17% of US adults were on a special diet on any given day. Studies have shown that rates of food allergies and special diets are on the rise.</p>
          <h3 className={styles.header}>Solution</h3>
          <p>Enter Piecemeal - the cooking application designed with every cook in mind. Piecemeal gives you, the user, the power to make all the decisions! Click the search parameters to the right to see how you can filter recipes just the way you want. </p>
        </Col>
        <Col xs lg="4" className="mt-3">
          <span className={styles.dropdown}>
            <div><CollapseDetail title={'Cuisines'} description={Details.Cuisines}/> </div>
            <div>  <CollapseDetail title={'Diets'} description={Details.Diets}/></div>
            <div><CollapseDetail title={'Intolerances'} description={Details.Intolerances}/> </div>
            <div> <CollapseDetail title={'Custom Search'} description={Details.CustomSearch}/></div>
          </span>
        </Col>

      </Row>

    </Container>
  )
}



