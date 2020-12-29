import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import Link from 'next/link';

// export async function getServerSideProps() {
//   const {currentRecipe} = useContext(SearchContext);
//   const res = await fetch()
//   return {

//   }
// }

const Results = () => {
  const {currentRecipe} = useContext(SearchContext);
  console.log('current', currentRecipe)

  return (
    <Container>
      <Jumbo title={currentRecipe.title} text={currentRecipe.summary}/>
      <Row as={Link} href="/results">Back to search results</Row>
      <Row>General Info</Row>
      <Row>Ingredients</Row>
      <Row>Directions</Row>
      <Row>Nutrients</Row>

    </Container>
  )
}

export default Results;