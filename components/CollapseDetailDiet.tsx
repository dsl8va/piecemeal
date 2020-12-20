import React, { useState } from "react";
import { Button, Collapse, Row } from "react-bootstrap";

export default function CollapseDetailDiet({ diet, definition }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row>
        <span
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
        >
          <b>{diet}</b>
        </span>
      </Row>
      <Row>
        <Collapse in={open}>
          <div id="collapse-text">
            {definition}
          </div>
        </Collapse>
      </Row>
    </>
  );
}