import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Image from 'next/image';
import styles from '../styles/Step.module.css'


export default function Step({step}) {
  const [complete, setComplete] = useState(false);
  let textStyle = complete ? "#A9A9A9" : "#808080";

  return (
     <span key={step.number}>
      <Card.Text style={{"color":`${textStyle}`}} onClick={() => setComplete(!complete)} className={styles.step}>
        <Image
        src={complete ? "/greenCheck.ico" : "/grayCheck.ico"}
        alt="Checkbox"
        width={16}
        height={16}
        />
        <b> Step {step.number}</b>
        </Card.Text>
      <Card.Text style={{"color":`${textStyle}`}} className="mb-3">{step.step}</Card.Text>
    </span>
  )
}