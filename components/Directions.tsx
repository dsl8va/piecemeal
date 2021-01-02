import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import Step from "./Step";


export default function Directions({array}) {

  // const [directions, setDirections] = useState([])
  var directions = [];
  if (array.length > 1) {
    array.forEach(steps => {
      directions = [...directions, ...steps.steps]
      console.log('here', directions)
    })
  } else {
    directions = array[0].steps
    console.log('here2', directions)
  }
  console.log('here3', directions)

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