import React, { useState } from "react";
import { Card, Button, Badge, Modal } from "react-bootstrap";

function RestaurantCard({ name, category, description, price, rating, vibe, image }) {
  const [added, setAdded] = useState(false);
  const [show, setShow] = useState(false);

  const handleTry = () => {
    setAdded(true);
    setShow(true);
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name} <Badge bg="info">{category}</Badge></Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>Price: {price} | Rating: {rating} | Vibe: {vibe}</div>
        <Button variant={added ? "success" : "primary"} onClick={handleTry} disabled={added} className="mt-2">
          {added ? "Added to Food Quest" : "Try It"}
        </Button>
      </Card.Body>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Added to Food Quest!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{name} has been added to your Food Quest list.</p>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default RestaurantCard;
