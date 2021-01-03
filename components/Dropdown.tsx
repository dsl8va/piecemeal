import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import DropdownItem from "./DropdownItem"

export default function Dropdown({ title, options, minmax }) {

  return (

    <Form.Row className="align-items-center">
      <Form.Label column sm={2}>{title}</Form.Label>

        <DropdownItem title={title} options={options} minmax={minmax}/>

     </Form.Row>
  )
}
