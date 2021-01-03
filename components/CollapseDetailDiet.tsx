import React, { useState } from "react";
import { Button, Collapse, Row } from "react-bootstrap";
import styles from "../styles/CollapseDetailDiet.module.css"

export default function CollapseDetailDiet({ diet, definition }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row className={styles.title}>
        <span
          className="mb-2"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
        >
          <b>{diet}</b>
        </span>
      </Row>
      <Row>
        <Collapse className="mb-2" in={open}>
          <div id="collapse-text">
            {definition}
          </div>
        </Collapse>
      </Row>
    </>
  );
}