'use client'; // Mark as Client Component

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from 'next-themes'; // Import useTheme
import Link from 'next/link'

const services = [
  {
    title: 'Painting Interiors in Goa',
    description: 'Transform your interiors with our expert painting services. We pay attention to every detail for a flawless finish.',
    imageSrc: '../../public/images/PaintingBuildingsApartments.jpg',
    link: '#contact', // Optional link
  },
  {
    title: 'Exterior Painting in Goa',
    description: 'Protect and beautify your property’s exterior with our durable and weather-resistant painting solutions.',
    imageSrc: 'public\images\heroSection.png',
    link: '#contact', // Optional link
  },
  {
    title: 'Commercial Painting in Goa',
    description: 'Enhance the appearance of your commercial spaces with our professional commercial painting solutions, offering minimal disruption and exceptional results.',
    imageSrc: '/images/commercial-painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    title: 'Industrial Painting in Goa',
    description: 'Protect and enhance your industrial spaces with our high-performance painting services, designed to withstand harsh conditions and heavy use.',
    imageSrc: '/images/commercial-painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    title: 'Speciality Services',
    description: 'Transform your space with unique specialty painting services, including faux finishes, eco-friendly options, and custom textures.',
    imageSrc: '/images/commercial-painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  // Add more services as needed
];

function ServiceCard({ title, description, imageSrc, link }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className={`h-100 service-card ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        {imageSrc && (
          <Card.Img variant="top" src={imageSrc} alt={title} />
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {link && (
            <Link href={link} className={`btn ${isDark ? 'btn-primary' : 'btn-warning'} mt-auto`}>Get Quote</Link>
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