import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import {SearchContext} from '../libs/searchContext';
import { useRouter } from 'next/router';

// Card template for use throughout application
export default function CardTemplate({ id, title, image, ready, random }) {

  const {handleCurrentRecipe, recipes} = useContext(SearchContext);
  const router = useRouter();

  const handleClick = async (e) => {
    const searchID = e.target.parentNode.parentNode.id;
    for (var recipe of recipes) {
      if (recipe.id == searchID) {
        await handleCurrentRecipe(recipe);
      }
    }
    await router.push('/recipe');
  }

  const handleClickRandom = async (e) => {
    const searchID = e.target.parentNode.parentNode.id;
    await fetch(`https://api.spoonacular.com/recipes/${searchID}/information?includeNutrition=true&apiKey=32f3365bab9b42479c0594d00489d7ca`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        handleCurrentRecipe(data);
      })
    await router.push('/recipe');
  }

  return (
    <>
      <Card key={id} id={id} className="mb-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Ready in {ready} minutes</Card.Text>
          {!random ?
            <Button onClick={handleClick} variant="secondary">See the recipe</Button>
            :
            <Button onClick={handleClickRandom} variant="secondary">See the recipe</Button>
          }
        </Card.Body>
      </Card>
    </>
  )
}