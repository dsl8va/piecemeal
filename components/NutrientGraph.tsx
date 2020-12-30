import React, { useState } from "react";
import { Button, Card, Container, ListGroup, ProgressBar, Table } from "react-bootstrap";


export default function NutrientGraph({carbsperc, fatperc, proteinperc, allNutrients}) {

  const [detail, setDetail] = useState(false);

  const handleClick = () => {
    setDetail(!detail);
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Text> Carbohydrates -
            <ProgressBar variant="secondary" now={carbsperc} label={`${carbsperc}%`}/>
          </Card.Text>
          <Card.Text> Fat -
            <ProgressBar variant="secondary" now={fatperc} label={`${fatperc}%`}/>
          </Card.Text>
          <Card.Text> Protein -
            <ProgressBar variant="secondary" now={proteinperc} label={`${proteinperc}%`}/>
          </Card.Text>
        </Card.Body>
      </Card>
       <Button onClick={handleClick} className="mt-3 mx-auto" variant="primary" size="sm">
          {detail ? 'Hide detailed nutritional information' : 'Show detailed nutritional information'}
       </Button>
       {detail &&
          <Table>
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