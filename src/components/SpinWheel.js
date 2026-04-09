import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const categories = [
  "Coffee",
  "Late-night Food",
  "Budget Eats",
  "Dessert",
  "Study Spots",
  "Hangout",
  "Quick Bite"
];

function SpinWheel() {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const spin = () => {
    const idx = Math.floor(Math.random() * categories.length);
    setSelected(categories[idx]);
    setShow(true);
  };

  return (
    <div className="text-center my-4">
      <Button variant="success" size="lg" onClick={spin}>
        Spin the Wheel
      </Button>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category Selected!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{selected}</h3>
          <p>Check out featured spots in this category on the Explore page!</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SpinWheel;
