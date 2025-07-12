'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from 'next-themes';

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-4 mt-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto">
            <p >
              &copy; {new Date().getFullYear()} InfinHues – Painting Services in Goa. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
