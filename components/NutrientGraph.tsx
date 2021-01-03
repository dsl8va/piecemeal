import React, { useState } from "react";
import { Button, Card, Container, ProgressBar, Table } from "react-bootstrap";

// Nutrient information template for Recipe page
export default function NutrientGraph({carbsperc, fatperc, proteinperc, allNutrients}) {

  const [detail, setDetail] = useState(false);

  const handleClick = () => {
    setDetail(!detail);
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Text><b>% Daily Value</b></Card.Text>
          Carbohydrates
            <ProgressBar variant="secondary" now={carbsperc} label={`${carbsperc}%`}/>
          Fat
            <ProgressBar variant="secondary" now={fatperc} label={`${fatperc}%`}/>
          Protein
            <ProgressBar variant="secondary" now={proteinperc} label={`${proteinperc}%`}/>

        </Card.Body>
      </Card>
       <Button onClick={handleClick} className="my-3" variant="primary" size="sm" block>
          {detail ? 'Hide detailed nutritional information' : 'Show detailed nutritional information'}
       </Button>
       {detail &&
          <Table className="mx-auto">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount per recipe</th>
              </tr>
            </thead>
            <tbody>
              {allNutrients.map(nutrient => {
                return (
                  <tr key={nutrient.title}>
                    <td>{nutrient.title}</td>
                    <td>{nutrient.amount} {nutrient.unit}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
       }
    </Container>
  )
}