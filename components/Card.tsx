import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardTemplate({ title, ready, diet, image }) {

  // if (diet.length === 0) {
  //   diet = ["N/A"];
  // }
  // const dietItems = diet.join(' / ')

  return (
    <>
      <Card className="mb-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Ready in {ready} minutes</Card.Text>
          {/* <Card.Text>Diet: {dietItems}</Card.Text> */}
          <Button onClick={() => console.log('click')} variant="secondary">See the recipe</Button>
        </Card.Body>
      </Card>
    </>
  )
}