import React, { useState } from 'react';
import { Accordion, Card, Col } from 'react-bootstrap';

// Accordian template for About page
export default function CollapseDetail({ title, description }) {
  return (
    <Col xs={6} className="mx-auto">
      <Accordion defaultActiveKey="0">
        <Card className="my-3 mx-3" border="secondary">
          <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor: "pointer", color: "#505050"}}>
            <strong>{title}</strong>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="ml-4">{description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>

  );
}