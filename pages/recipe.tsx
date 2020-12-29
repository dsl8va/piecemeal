import React, { useContext } from 'react';
import { Container, Row, Image, Card } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import Link from 'next/link';
import RecipeInfo from '../components/RecipeInfo';
import Accordian from '../components/Accordian';
import Ingredients from '../components/Ingredients';

// export async function getServerSideProps() {
//   const {currentRecipe} = useContext(SearchContext);
//   const res = await fetch()
//   return {

//   }
// }

const Recipe = () => {
  const {currentRecipe} = useContext(SearchContext);
  console.log('current', currentRecipe)
  var blurb, health;
  if (currentRecipe) {
    if (currentRecipe.summary) {
      blurb = currentRecipe.summary.split('.')[0];
    }
    health = currentRecipe.nutrition;
  }
  console.log('length', currentRecipe.length)
  return (

    <Container className="mb-3">
      {!Array.isArray(currentRecipe) &&
      <>
        <Row as={Link} href="/results">Back to search results</Row>
        <Jumbo title={currentRecipe.title} text={blurb}/>
        <Row>
          <Image
            className="mx-auto"
            src={currentRecipe.image}
            alt="Picture of recipe"
            height={400}
            width={500}
            fluid
            rounded
          />
          <RecipeInfo time={currentRecipe.readyInMinutes} servings={currentRecipe.servings} diet={currentRecipe.diets} calories={health.nutrients[0].amount} fat={health.nutrients[1].amount} carbs={health.nutrients[3].amount} protein={health.nutrients[8].amount}/>
        </Row>
        <Accordian title={"Ingredients"} body={<Ingredients ingredients={health.ingredients}/>}/>
        <Accordian title={"Directions"} body={"Body"}/>
        <Accordian title={"Nutritional Information"} body={"Body"}/>

      </>
      }
    </Container>
  )
}

export default Recipe;