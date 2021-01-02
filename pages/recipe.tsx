import React, { useContext } from 'react';
import { Container, Row, Image, Card, Col, Button } from 'react-bootstrap';
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
import styles from '../styles/Recipe.module.css';

const Recipe = () => {
  const {currentRecipe, recipes} = useContext(SearchContext);
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
      {recipes.length > 0 &&
      <Link href="/results" passHref>
        <Button className="mx-3 my-3" variant="outline-secondary">Back to search results</Button>
      </Link>
      }

      <h1 className={styles.center}>{currentRecipe.title}</h1>

        <Row className="my-3">

            <Image
              className="mx-auto"
              src={currentRecipe.image}
              alt="Picture of recipe"
              height={400}
              width={500}
              fluid
              rounded
            />

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