import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DropdownItem from "./DropdownItem";
import styles from "../styles/Dropdown.module.css";

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
    <span className={styles.container}>

      <Button className={styles.button} size="sm" onClick={() => handleAdd()} variant="success">+</Button>

        <DropdownItem title={title} options={options} minmax={minmax} fields={fields} handleRemove={handleRemove}/>

     </span>
  )
}
