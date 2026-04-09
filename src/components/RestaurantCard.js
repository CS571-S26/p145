import React, { useState } from "react";
import { Card, Button, Badge, Modal } from "react-bootstrap";

function RestaurantCard({ name, category, description, priceRange, rating, vibe, image }) {
  const [added, setAdded] = useState(false);
  const [show, setShow] = useState(false);

  const handleTry = () => {
    setAdded(true);
    setShow(true);
  };

  return (
    <Card>
      {image && <Card.Img variant="top" src={image} alt={name} />}
      <Card.Body>
        <Card.Title>{name} <Badge bg="info">{category}</Badge></Card.Title>
        <Card.Text>{description}</Card.Text>
        <div>Price: {priceRange} {rating && `| Rating: ${rating}`} | Vibe: {vibe}</div>
        <Button variant={added ? "success" : "primary"} onClick={handleTry} disabled={added} className="mt-2">
          {added ? "Added to The Great Snack Quest" : "Try It"}
        </Button>
      </Card.Body>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Added to The Great Snack Quest!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{name} has been added to your Great Snack Quest list.</p>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default RestaurantCard;
