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


function SpinWheel({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const spin = () => {
    const idx = Math.floor(Math.random() * categories.length);
    const category = categories[idx];
    setSelected(category);
    setShow(true);
    if (onSelect) onSelect(category);
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
          <h2>🎯 You got: {selected}</h2>
          <p>Check out featured spots in this category on the Explore page!</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SpinWheel;
