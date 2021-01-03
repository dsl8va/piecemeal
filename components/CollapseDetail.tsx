import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

// Accordian template for About page
export default function CollapseDetail({ title, description }) {
  return (

    <Accordion defaultActiveKey="0">
      <Card className="my-3 mx-3" border="secondary">
        <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor: "pointer"}}>
          <strong>{title}</strong>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  );
}