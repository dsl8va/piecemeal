import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import Step from "./Step";
import StepList from "./StepList";


export default function Directions({directions}) {

  // var directions = [];
  // if (array.length > 1) {
  //   array.forEach(steps => {
  //     directions = [...directions, ...steps.steps]
  //   })
  // } else {
  //   directions = array[0].steps
  // }


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