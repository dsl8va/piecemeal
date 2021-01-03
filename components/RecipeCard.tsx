import React from "react";
import { Card } from "react-bootstrap";

// Recipe Card template for Recipe page for ingredients, directions, etc.
export default function RecipeCard({title, body}) {

  return (
    <Card className="my-3" border="white">
      <Card.Header><b>{title}</b></Card.Header>
      <Card.Body>
        {body}
      </Card.Body>
    </Card>
  )
}