import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import styles from '../styles/Step.module.css'


export default function Step({step}) {
  const [complete, setComplete] = useState(false);
  let textStyle = complete ? "#A9A9A9" : "#808080";

  return (
     <>
      <Card.Text key={step.number} style={{"color":`${textStyle}`}} onClick={() => setComplete(!complete)} className={styles.step}>
        <img
        src={complete ? "/greenCheck.ico" : "/grayCheck.ico"}
        alt="Checkbox"
        width={16}
        height={16}
        />
        <b> Step {step.number}</b>
        </Card.Text>
      <Card.Text style={{"color":`${textStyle}`}} className="mb-3">{step.step}</Card.Text>
    </>
  )
}