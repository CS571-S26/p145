import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Button, Form, Row, Col } from "react-bootstrap";

const sampleRestaurants = [
  {
    name: "Cafe 1848",
    category: "Coffee",
    description: "Cozy spot for coffee and pastries.",
    price: "$",
    rating: 4.5,
    vibe: "Study Spot",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Night Owl Diner",
    category: "Late-night Food",
    description: "Open late with classic comfort food.",
    price: "$$",
    rating: 4.2,
    vibe: "Hangout",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Budget Bites",
    category: "Budget Eats",
    description: "Affordable meals for students.",
    price: "$",
    rating: 4.0,
    vibe: "Quick Bite",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80"
  }
];

function CategoryList() {
  const [filter, setFilter] = useState({ price: "", vibe: "" });
  const [restaurants, setRestaurants] = useState(sampleRestaurants);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filtered = restaurants.filter((r) => {
    return (
      (!filter.price || r.price === filter.price) &&
      (!filter.vibe || r.vibe === filter.vibe)
    );
  });

  return (
    <div>
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Select name="price" value={filter.price} onChange={handleChange}>
              <option value="">All Prices</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select name="vibe" value={filter.vibe} onChange={handleChange}>
              <option value="">All Vibes</option>
              <option value="Study Spot">Study Spot</option>
              <option value="Hangout">Hangout</option>
              <option value="Quick Bite">Quick Bite</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row>
        {filtered.map((r, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <RestaurantCard {...r} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryList;
