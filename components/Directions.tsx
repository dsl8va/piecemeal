import React from "react";
import { Card } from "react-bootstrap";
import StepList from "./StepList";

// Template for directions in the recipe page
export default function Directions({directions}) {

  return (
    <Card>
      <Card.Body>
        {directions.map(step => {
          return (
           <StepList list={step}/>
          )
        })}
      </Card.Body>
    </Card>
  )
}