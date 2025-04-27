'use client'; // Mark as Client Component

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from 'next-themes'; // Import useTheme

const testimonials = [
  { name: 'John D.', city: 'Panaji', quote: 'Excellent painting service! Professional, on time, and the quality was outstanding.' },
  { name: 'Priya S.', city: 'Vasco', quote: 'Highly recommend! They transformed our home beautifully. Very meticulous and clean.' },
  // Add more testimonials
];

function TestimonialsSection() {
  const { theme } = useTheme(); // Get the theme
  const isDark = theme === 'dark'; // Define isDark based on the theme

  return (
    <section id="testimonials" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <h2>Testimonials</h2>
        <Row className="gy-4">
          {testimonials.map((testimonial, index) => (
            <Col md={6} key={index}>
              <Card className={isDark ? 'bg-secondary text-light' : ''}>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>{testimonial.quote}</p>
                    <footer className="blockquote-footer mt-2">
                      {testimonial.name}, <cite title="Source Title">{testimonial.city}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;