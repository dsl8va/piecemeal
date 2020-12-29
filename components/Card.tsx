import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import {SearchContext} from '../libs/searchContext';
import { useRouter } from 'next/router';

export default function CardTemplate({ id, title, image }) {

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

  return (
    <>
      <Card key={id} id={id} className="mb-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button onClick={handleClick} variant="secondary">See the recipe</Button>
        </Card.Body>
      </Card>
    </>
  )
}