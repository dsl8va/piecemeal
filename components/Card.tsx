import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardTemplate({ title, description, image }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button onClick={() => console.log('click')} variant="secondary">See the recipe</Button>
        </Card.Body>
      </Card>
    </>
  )
}