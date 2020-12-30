import React from "react";
import { Card, ListGroup } from "react-bootstrap";


export default function Directions({array}) {
  var directions = [];
  if (array.length > 1) {
    array.forEach(steps => {
      directions.concat(steps.steps);
    })
  } else {
    directions = array[0].steps;
  }
  return (
    <Card>
      <Card.Body>
        {directions.map(step => {
          return (
            <span key={step.number}>
              <Card.Text><b>Step {step.number}</b></Card.Text>
              <Card.Text className="mb-3">{step.step}</Card.Text>
            </span>
          )
        })}
      </Card.Body>
    </Card>
  )
}