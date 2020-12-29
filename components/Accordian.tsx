import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

export default function Accordian({title, body}) {

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            {title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}