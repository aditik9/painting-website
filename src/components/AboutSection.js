'use client'; // This line tells Next.js to treat this as a Client Component

import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from 'next-themes';

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>Share your story, experience, and what makes you the best choice for painting services in Panaji, Goa. Highlight your expertise, commitment to quality, and customer satisfaction.</p>
            {/* Add more details about your company */}
          </Col>
          <Col md={6}>
            {/* You can add an image related to your company here */}
            {/* <img src="/images/about-us.jpg" alt="About Our Company" className="img-fluid rounded" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;