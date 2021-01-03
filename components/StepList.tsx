import React from "react";
import Step from "./Step";

// Step template for Recipe page
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