'use client'; // This line tells Next.js to treat this as a Client Component

import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-4 mt-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" className="text-center">
            &copy; {new Date().getFullYear()} [Your Painting Company Name]. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;