import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";


export default function CollapseDetail(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
      >
        {props.title}
      </Button>
      <Collapse in={open}>
        <div id="collapse-text">
          {props.description}
        </div>
      </Collapse>
    </>
  );
}