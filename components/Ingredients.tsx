import React from "react";
import { ListGroup } from "react-bootstrap";
const Fraction = require('fraction.js');

export default function Ingredients({ingredients}) {

  return (
    <ListGroup variant="flush">
      {ingredients.map(ingredient => {
        // let frac = new Fraction(ingredient.amount);
        // let fraction = frac.toFraction(true);
        return (
          <ListGroup.Item key={`${ingredient.name}${ingredient.amount}${ingredient.unit}`}>
            <input className="mr-3" type="checkbox"></input>

          {ingredient.amount} {ingredient.unit} {ingredient.name}</ListGroup.Item>
        )
      })
      }
    </ListGroup>
  )
}