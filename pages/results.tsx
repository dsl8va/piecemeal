import React, {useContext, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import CardTemplate from '../components/Card';
import styles from '../styles/results.module.css';
import Link from 'next/link';

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
      <Jumbo title={`${number} matching recipes`} text={"Blah Blah Blah."}/>
      <Row as={Link} href="/custom">Back to search</Row>
      <span className={styles.recipeList}>
        {recipes.map(recipe => {
          return (
            <CardTemplate id={recipe.id} title={recipe.title} image={recipe.image}/>
          )
        })}
      </span>
    </Container>
  )
}

export default Results;