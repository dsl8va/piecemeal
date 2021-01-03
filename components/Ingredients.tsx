import React from "react";
import { ListGroup } from "react-bootstrap";

// Template for Ingredients section on Recipe page
export default function Ingredients({ingredients, servings}) {

  return (
    <ListGroup variant="flush">
      {ingredients.map(ingredient => {

        let amount = (ingredient.amount * servings)
        return (
          <ListGroup.Item key={`${ingredient.name}${ingredient.amount}${ingredient.unit}`}>
            <input className="mr-3" type="checkbox"></input>

          {amount} {ingredient.unit} {ingredient.name}</ListGroup.Item>
        )
      })
      }
    </ListGroup>
  )
}