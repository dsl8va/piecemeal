import React, { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";


export default function DropdownItem({ title, options, minmax }) {
  let min = `${title}min`
  let max = `${title}max`
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <>
    <Button onClick={() => handleAdd()} variant="success">+</Button>


    {
      fields.map((field, idx) => {
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
             <Button onClick={() => handleRemove(idx)} variant="danger">-</Button>
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
            </>
        )
      })
    }
      </>
  )
}
