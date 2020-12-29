import React from "react";
import { Card, CardColumns, CardDeck, CardGroup, Row } from "react-bootstrap";


export default function RecipeInfo({time, servings, diet, calories, fat, carbs, protein}) {
  let dietList = '';
  if (diet.length === 0) {
    dietList = 'none'
  } else {
    for (let i = 0; i < diet.length; i++) {
      dietList += diet[0];
      if (i === diet.length-1) {
        dietList += diet[i];
      } else {
        dietList += `, ${diet[i]}, `
      }
    }
  }

  return (
    <Card className="mt-3 mx-auto">
      <Card.Body>
        <Card.Text><b>Ready in:</b> {time} mins</Card.Text>
        <Card.Text><b>Servings:</b> {servings}</Card.Text>
        <Card.Text><b>Diets:</b> {dietList}</Card.Text>
        <Card.Text><b>Calories:</b> {calories}</Card.Text>
        <Card.Text><b>Fat:</b> {fat}g</Card.Text>
        <Card.Text><b>Carbohydrates:</b> {carbs}g</Card.Text>
        <Card.Text><b>Protein:</b> {protein}g</Card.Text>
      </Card.Body>
    </Card>
  )
}