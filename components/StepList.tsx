import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import styles from '../styles/StepList.module.css'
import Step from "./Step";


export default function StepList({list}) {

  let steps = list.steps;
  return (
    <span>
      {list.name ? <h5>{list.name}</h5> : null}
      {steps.map(step => {
        return (
          <Step step={step}/>
        )
      })}
      <br></br>
    </span>
  )
}