import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

export default function CollapseDetail({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="mb-3"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
      >
        {title}
      </Button>
      <Collapse in={open}>
        <div id="collapse-text">
          {description}
        </div>
      </Collapse>
    </>
  );
}