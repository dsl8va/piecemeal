import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DropdownItem from "./DropdownItem";

// Dropdown input field template on Custom Search page
export default function Dropdown({ title, options, minmax }) {
  const [fields, setFields] = useState([{ value: null }]);

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

    <Form.Row className="align-items-center">
      <Button className="ml-1" size="sm" onClick={() => handleAdd()} variant="success">+</Button>
      <Form.Label column sm={2}>{title}</Form.Label>

        <DropdownItem title={title} options={options} minmax={minmax} fields={fields} handleRemove={handleRemove}/>

     </Form.Row>
  )
}
