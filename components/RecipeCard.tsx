import React from "react";
import { Card } from "react-bootstrap";


export default function RecipeCard({title, body}) {

  return (
    <Card className="my-3" border={title=="Directions" ? "secondary" : "primary"}>
      <Card.Header><b>{title}</b></Card.Header>
      <Card.Body>
        {body}
      </Card.Body>
    </Card>
  )
}