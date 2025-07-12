'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from 'next-themes';

const testimonials = [
  {
    name: 'John D.',
    city: 'Panaji',
    quote: 'Excellent painting service! Professional, on time, and the quality was outstanding.',
  },
  {
    name: 'Priya S.',
    city: 'Vasco',
    quote: 'Highly recommend! They transformed our home beautifully. Very meticulous and clean.',
  },
];

function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="testimonials"
      className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <h2 id="testimonials-heading">What Our Clients Say</h2>
        <Row className="gy-4">
          {testimonials.map((testimonial, index) => (
            <Col md={6} key={index}>
              <Card className={isDark ? 'bg-secondary text-light' : ''}>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="lead">“{testimonial.quote}”</p>
                    <footer className="blockquote-footer mt-2">
                      {testimonial.name}, <cite>{testimonial.city}</cite>
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
