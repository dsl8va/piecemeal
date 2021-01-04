import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import styles from "../styles/DropdownItem.module.css";

// Template for form fields on Custom Search page to allow conditional rendering based on +/- buttons
export default function DropdownItem({ title, options, minmax, fields, handleRemove }) {
  let min = `${title}min`
  let max = `${title}max`

  return (
    <>
      {fields.map((field, idx) => {

          return (
            <>
            {idx == 0 &&
               <Form.Label column sm={2} className={styles.param}>{title}</Form.Label>
            }

              <Col sm={4}>

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

                {!minmax && <Button className={styles.button} size="sm" onClick={() => handleRemove(idx)} variant="danger">-</Button>}

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
                    <Button className={styles.button}size="sm" onClick={() => handleRemove(idx)} variant="danger">-</Button>
                </>
              }
            </>
          )
        })
      }
    </>
  )
}
