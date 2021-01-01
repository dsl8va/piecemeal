import React, { useContext } from 'react';
import { Container, Row, Image, Card, Col } from 'react-bootstrap';
import Jumbo from '../components/Jumbo';
import {SearchContext} from './../libs/searchContext';
import Link from 'next/link';
import RecipeInfo from '../components/RecipeInfo';
import Accordian from '../components/Accordian';
import Ingredients from '../components/Ingredients';
import Head from 'next/head';
import Directions from '../components/Directions';
import NutrientGraph from '../components/NutrientGraph';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
  const {currentRecipe} = useContext(SearchContext);
  console.log('current', currentRecipe)
  var blurb, health;
  if (currentRecipe) {
    if (currentRecipe.summary) {

      blurb = currentRecipe.summary.split('.')[0];
      blurb = `${blurb}`
      console.log('blurb', blurb)
    }
    health = currentRecipe.nutrition;
  }

  const amountFinder = (array, target) => {
    for (var nutrient of array) {
      if (nutrient.title === target) {
        return nutrient.amount;
      }
    }
  }

  return (

    <Container className="mb-3" fluid>
       <Head>
        <title>{currentRecipe.title}</title>
      </Head>
      {!Array.isArray(currentRecipe) &&
      <>
        <Row as={Link} href="/results">Back to search results</Row>
        <Jumbo title={currentRecipe.title} text={blurb}/>
        <Row className="my-3">
          {/* <Col sm={8}> */}
            <Image
              className="mx-auto"
              src={currentRecipe.image}
              alt="Picture of recipe"
              height={400}
              width={500}
              fluid
              rounded
            />
          {/* </Col> */}
          {/* <Col sm={4}> */}
            <RecipeInfo time={currentRecipe.readyInMinutes} servings={currentRecipe.servings} diet={currentRecipe.diets} calories={amountFinder(health.nutrients, "Calories")} fat={amountFinder(health.nutrients, "Fat")} carbs={amountFinder(health.nutrients, "Carbohydrates")} protein={amountFinder(health.nutrients, "Protein")}/>
          {/* </Col> */}
        </Row>

        <RecipeCard title={"Ingredients"} body={ <Ingredients ingredients={health.ingredients}/>}/>
        <RecipeCard title={"Directions"} body={ <Directions array={currentRecipe.analyzedInstructions}/>}/>
        <RecipeCard title={"Nutritional Information"} body={ <NutrientGraph carbsperc={health.caloricBreakdown.percentCarbs} fatperc={health.caloricBreakdown.percentFat} proteinperc={health.caloricBreakdown.percentProtein} allNutrients={health.nutrients}/>}/>

      </>
      }
    </Container>
  )
}

export default Recipe;