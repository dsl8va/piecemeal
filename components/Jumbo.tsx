import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styles from '../styles/jumbo.module.css'


export default function Jumbo({ title, text }) {

  return (
    <Jumbotron className={styles.jumbo}>
      <Container>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </Container>
    </Jumbotron>

  )
}
