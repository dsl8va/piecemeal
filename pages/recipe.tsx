import React, { useContext } from 'react';
import { Container, Row, Image, Col, Button, CardDeck } from 'react-bootstrap';
import {SearchContext} from './../libs/searchContext';
import Link from 'next/link';
import RecipeInfo from '../components/RecipeInfo';
import Ingredients from '../components/Ingredients';
import Head from 'next/head';
import Directions from '../components/Directions';
import NutrientGraph from '../components/NutrientGraph';
import RecipeCard from '../components/RecipeCard';
import styles from '../styles/Recipe.module.css';
import { EmailShareButton, EmailIcon, FacebookShareButton,FacebookIcon, PinterestShareButton, PinterestIcon, RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon
} from "react-share";

// Recipe page
export default function Recipe() {
  const {currentRecipe, recipes} = useContext(SearchContext);
  console.log('current', currentRecipe)
  var blurb, health, text;
  if (currentRecipe) {
    if (currentRecipe.summary) {

      blurb = currentRecipe.summary.split('.')[0];
      console.log('blurb1:', blurb)
      text = blurb.replace(/(<([^>]+)>)/gi, "");
      console.log('blurb2:', text)

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
      <p className={styles.center}>{text}</p>

        <Row noGutters className="my-3 justify-content-md-center">
          <Col xs lg="5">
            <Image
              className="mx-auto"
              src={currentRecipe.image}
              alt="Picture of recipe"
              height={400}
              width={"100%"}
              fluid
              rounded
            />
          </Col>
          <Col md="auto" className="my-auto">
            <span className={styles.container}>
              <EmailShareButton className={styles.icon} url={window.location.href}>
                <EmailIcon size={40} round={true}/>
              </EmailShareButton>
              <FacebookShareButton className={styles.icon}  url={window.location.href}>
                <FacebookIcon size={40} round={true}/>
              </FacebookShareButton>
              <TwitterShareButton className={styles.icon} url={window.location.href}>
                <TwitterIcon size={40} round={true}/>
              </TwitterShareButton>
              <PinterestShareButton className={styles.icon} media={currentRecipe.image} url={window.location.href}>
                <PinterestIcon size={40} round={true}/>
              </PinterestShareButton>
              <RedditShareButton className={styles.icon} url={window.location.href}>
                <RedditIcon size={40} round={true}/>
              </RedditShareButton>
            </span>
          </Col>
          <Col xs lg="2" className="my-auto">
            <RecipeInfo time={currentRecipe.readyInMinutes} servings={currentRecipe.servings} diet={currentRecipe.diets} calories={amountFinder(health.nutrients, "Calories")} fat={amountFinder(health.nutrients, "Fat")} carbs={amountFinder(health.nutrients, "Carbohydrates")} protein={amountFinder(health.nutrients, "Protein")}/>
          </Col>

        </Row>
        <CardDeck>
          <Col sm={6}>
            <RecipeCard title={"Ingredients"} body={ <Ingredients ingredients={health.ingredients} servings={currentRecipe.servings}/>}/>
            <RecipeCard title={"Nutritional Information"} body={ <NutrientGraph carbsperc={health.caloricBreakdown.percentCarbs} fatperc={health.caloricBreakdown.percentFat} proteinperc={health.caloricBreakdown.percentProtein} allNutrients={health.nutrients}/>}/>
          </Col>

          <RecipeCard title={"Directions"} body={ <Directions directions={currentRecipe.analyzedInstructions}/>}/>

        </CardDeck>

      </>
      }
    </Container>
  )
}
