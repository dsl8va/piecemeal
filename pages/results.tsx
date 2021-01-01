import React, {useContext, useEffect} from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import CardTemplate from '../components/Card';
import styles from '../styles/results.module.css';
import Link from 'next/link';
import Head from 'next/head';

// export async function getServerSideProps() {
//   const {query} = useContext(SearchContext);
//   const res = await fetch(query);
//   const data = await res.json();

//   return {
//     props: {data}
//   }
// }

const Results = () => {
  const {recipes, query} = useContext(SearchContext);

  let number = recipes.length;

  return (
    <Container>
       <Head>
        <title>Search Results</title>
      </Head>
      <Jumbo title={`${number} matching recipes`} text={"Blah Blah Blah."}/>
      <Row as={Link} href="/custom">Back to search</Row>
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