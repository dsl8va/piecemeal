import React, {useContext} from 'react';
import { Container, Button } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import CardTemplate from '../components/Card';
import styles from '../styles/Results.module.css';
import Link from 'next/link';
import Head from 'next/head';

// Results page after search
export default function Results() {
  const {recipes} = useContext(SearchContext);

  let number = recipes.length;
  let title = number == 0 ? "Oh no! Looks like there are no matching recipes" : number == 1 ? `1 matching recipe` : `${number} matching recipes`;
  let text = number == 0 ? "try again with less stringent search parameters" : "let's get cooking!"

  return (
    <Container className={styles.pageContainer}>
       <Head>
        <title>Search Results</title>
      </Head>
      <Jumbo image={"/images/kitchen8.jpeg"} imageDesc={"Results page picture"} title={title} text={text}/>

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
        null
      }
    </Container>
  )
}
