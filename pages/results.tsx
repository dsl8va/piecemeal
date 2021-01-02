import React, {useContext, useEffect} from 'react';
import { Container, Row, Spinner, Image, Button } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import CardTemplate from '../components/Card';
import styles from '../styles/Results.module.css';
import Link from 'next/link';
import Head from 'next/head';

const Results = () => {
  const {recipes, query} = useContext(SearchContext);

  let number = recipes.length;

  return (
    <Container className={styles.pageContainer}>
       <Head>
        <title>Search Results</title>
      </Head>
      <Jumbo image={"/images/kitchen8.jpeg"} imageDesc={"Results page picture"} title={`${number} matching recipes`} text={"let's get cooking!"}/>

      <Link href="/custom" passHref>
        <Button className={styles.button} variant="outline-secondary">Back to search</Button>
      </Link>

      {recipes.length > 0 ?
        <span className={styles.recipeList}>
          {recipes.map(recipe => {
            return (
              <CardTemplate key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} ready={recipe.readyInMinutes}  random={false}/>
            )
          })}
        </span>
        :
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }
    </Container>
  )
}

export default Results;