import React, { useState } from 'react';
import { Form, Button, ListGroup, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CommentSection({ comments, onAddComment }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Comment cannot be empty.');
      return;
    }
    onAddComment(input.trim());
    setInput('');
    setError('');
  };

  return (
    <div className="my-3" aria-label="Comment Section">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentInput">
          <Form.Label className="visually-hidden">Add a tip or review</Form.Label>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Leave a tip or review..."
            aria-label="Add a tip or review"
            maxLength={120}
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-2" variant="primary" aria-label="Submit comment">
          Submit
        </Button>
      </Form>
      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
      <ListGroup className="mt-3" aria-label="Comments list">
        {comments.length === 0 && <ListGroup.Item>No comments yet.</ListGroup.Item>}
        {comments.map((c, idx) => (
          <ListGroup.Item key={idx} tabIndex={0}>{c}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddComment: PropTypes.func.isRequired,
};

export default CommentSection;
