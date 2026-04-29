import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5" style={{ fontFamily: 'Segoe UI' }}>
      <Container className="text-center">
        <span>&copy; {new Date().getFullYear()} The Great Snack Quest &middot; UW-Madison</span>
      </Container>
    </footer>
  );
}

export default Footer;
