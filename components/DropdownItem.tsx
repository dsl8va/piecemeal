import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";

export default function DropdownItem({ title, options, minmax, fields, handleRemove }) {
  let min = `${title}min`
  let max = `${title}max`

  return (
    <>
      {fields.map((field, idx) => {
          return (
            <>
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
                {!minmax && <Button size="sm" onClick={() => handleRemove(idx)} variant="danger">-</Button>}

                {fields.length > 1 ? `\n` :null}

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
                        />
                      </InputGroup>
                    </Col>
                    <Button size="sm" onClick={() => handleRemove(idx)} variant="danger">-</Button>
                </>
              }
            </>
          )
        })
      }
    </>
  )
}