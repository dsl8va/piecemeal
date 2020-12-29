import React from "react";
import { Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { Cuisines, Diets, Intolerances, Nutrients, Vitamins } from "../libs/SearchParams"

export default function Dropdown({ title, options, minmax }) {
  let min = `${title}min`
  let max = `${title}max`

  return (

    <Form.Row className="align-items-center">
      <Form.Label column sm={2}>{title}</Form.Label>
      <Col sm={3} className="my-1">
        <Form.Label className="mr-sm-2" htmlFor={title} srOnly>
          {title}
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id={title}
          custom
        >
          <option key={title} value="0">Choose...</option>
          {options}
        </Form.Control>
      </Col>

      {minmax &&
        <>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Min</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id={min}
                type="number"
                min={0}
                aria-label="Min"
                // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
          <Col sm={2}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Max</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id={max}
                type="number"
                min={1}
                aria-label="Max"
                // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
        </>
      }

     </Form.Row>
  )
}
