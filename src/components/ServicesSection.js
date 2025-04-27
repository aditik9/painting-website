'use client'; // Mark as Client Component

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from 'next-themes'; // Import useTheme
import Link from 'next/link'

const services = [
  {
    title: 'Interior Painting',
    description: 'Transform your interiors with our expert painting services. We pay attention to every detail for a flawless finish.',
    imageSrc: '/images/interior-painting.jpg', // Add image path
    link: '/interior-painting', // Optional link
  },
  {
    title: 'Exterior Painting',
    description: 'Protect and beautify your property’s exterior with our durable and weather-resistant painting solutions.',
    imageSrc: '/images/exterior-painting.jpg', // Add image path
    link: '/exterior-painting', // Optional link
  },
  {
    title: 'Commercial Painting',
    description: 'Professional and efficient painting services for commercial spaces, ensuring minimal disruption to your business.',
    imageSrc: '/images/commercial-painting.jpg', // Add image path
    link: '/commercial-painting', // Optional link
  },
  // Add more services as needed
];

function ServiceCard({ title, description, imageSrc, link }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className={`h-100 service-card ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        {imageSrc && (
          <Card.Img variant="top" src={imageSrc} alt={title} />
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {link && (
            <Link href={link} className={`btn ${isDark ? 'btn-outline-light' : 'btn-primary'} mt-auto`}>Learn More</Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'} services-section`}>
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row className="gy-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;