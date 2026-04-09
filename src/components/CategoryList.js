
import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Form, Row, Col, Spinner } from "react-bootstrap";

function CategoryList() {
  const [filter, setFilter] = useState({ price: "", vibe: "" });
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/restaurants.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded restaurants:", data);
        setRestaurants(data);
        setLoading(false);
      });
  }, []);


  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filtered = restaurants.filter((r) => {
    // If no filters, show all
    if (!filter.price && !filter.vibe) return true;
    const priceMatch = !filter.price || r.priceRange === filter.price;
    const vibeMatch = !filter.vibe || (r.vibe && r.vibe.toLowerCase() === filter.vibe.toLowerCase());
    return priceMatch && vibeMatch;
  });

  if (loading) {
    return <div className="text-center my-5"><Spinner animation="border" /></div>;
  }

  return (
    <div>
      <Form className="mb-3">
        <Row>
          <Col md={4}>
            <Form.Select name="price" value={filter.price} onChange={handleChange}>
              <option value="">All Prices</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select name="vibe" value={filter.vibe} onChange={handleChange}>
              <option value="">All Vibes</option>
              <option value="study spot">Study Spot</option>
              <option value="hangout">Hangout</option>
              <option value="quick bite">Quick Bite</option>
              <option value="date spot">Date Spot</option>
              <option value="late-night food">Late-night Food</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row>
        {filtered.map((r) => (
          <Col md={4} key={r.id} className="mb-4">
            <RestaurantCard {...r} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryList;
