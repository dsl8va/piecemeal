import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import Step from "./Step";


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
           <Step step={step}/>
          )
        })}
      </Card.Body>
    </Card>
  )
}