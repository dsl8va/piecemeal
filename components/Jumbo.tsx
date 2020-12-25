import React from "react";
import { Jumbotron, Container } from "react-bootstrap";


export default function Jumbo({ title, text }) {

  return (
    <Jumbotron>
      <Container>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </Container>
    </Jumbotron>

  )
}
