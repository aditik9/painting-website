'use client'; // Mark as Client Component

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from 'next-themes'; // Import useTheme
import Link from 'next/link'
import { useInView } from './useInView'; // hook from earlier




const services = [
  {
    type: 'Interior Painting',
    title: 'Residential Painting Services in Goa',
    description: 'Refresh and revitalize your home with expert residential painting by InfinHues. We provide interior and exterior painting, wall repairs, waterproofing, and long-lasting maintenance painting for houses, villas, apartments, and flats across Goa.',
    imageSrc: '/images/Interior_Painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    type: 'Exterior Painting',
    title: 'Exterior Painting Services in Goa',
    description: 'Protect and beautify your property’s exterior with our durable and weather-resistant painting solutions tailored for Goa’s coastal climate.',
    imageSrc: '/images/apartments.jpg',
    link:'#contact', // Optional link
  },
  {
    type: 'Commercial & Office Painting',
    title: 'Commercial Painting Contractors in Goa',
    description: 'InfinHues offers professional painting services for office buildings, retail shops, schools, educational institutions, co-working spaces, and commercial complexes. Minimal disruption, maximum impact! Delivers polished results on time and within budget.',
    imageSrc: '/images/Commercial_Painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    type: 'Industrial Painting',
    title: 'Industrial Painting Services in Goa',
    description: 'Protect and Enhance your industrial property and space with our specialized coatings, metal surface treatments, and waterproofing designed for heavy-duty use.',
    imageSrc: '/images/Painting_industrial.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    type: 'Speciality Painting',
    title: 'Speciality Painting Services in Goa',
    description: 'Transform your space with textured finishes, eco-friendly options, stencil designs, and faux effects by InfinHues specialists.',
    imageSrc: '/images/Interior_Painting.jpg', // Add image path
    link: '#contact', // Optional link
  },
  {
    type: 'Decorative & Artistic Painting Services',
    title: 'Custom Designs, Murals & Mandala Painting Services',
    description: 'Add personality and creativity to your walls with hand-painted murals, mandalas, and artistic designs—ideal for homes, cafés, schools, temples, and churches. Our InfinHues artists create custom artwork that transforms plain walls into stunning expressions of style.',
    imageSrc: '/images/Interior_Painting.jpg', // Add image path
    link: '#contact', // Optional link
  }
];

// function ServiceCard({ title, description, imageSrc, link }) {
//   const { theme } = useTheme();
//   const isDark = theme === 'dark';

//   return (
//     <Col md={3} lg={4} className="mb-3">
//       <Card className={`h-100 service-card ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
//         {imageSrc && (
//           <Card.Img variant="top" src={imageSrc} alt={title} />
//         )}
//         <Card.Body className="d-flex flex-column">
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           {link && (
//             <Link href={link} className={`btn ${isDark ? 'btn-primary' : 'btn-warning'} mt-auto`}>Get Quote</Link>
//           )}
//         </Card.Body>
//       </Card>
//     </Col>
    
//   );
// }





function ServiceCard({ type, title, description, imageSrc, link }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Col md={3} lg={4} className="mb-3">
      <div className={`service-card ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <img src={imageSrc} alt={`${title} | InfinHues Painting Services Goa`} className="img-fluid" />
        <div className="service-overlay">
          <h4>{title}</h4>
          <p className="text-justify">{description}</p>
          {link && (
            <Link href={link} className={`btn ${isDark ? 'btn-primary' : 'btn-warning'} mt-2`} aria-label={`Get a quote for ${title}`}>
              Get Quote
            </Link>
          )}
        </div>
      </div>
      <h3>{type}</h3>
    </Col>
  );
}


function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'} services-section`}>
      <Container>
        <h2 as="h1" className="text-center mb-4">Painting Services in Goa</h2>
        <p className="lead text-center mb-4">
          From homes to offices and factories, InfinHues offers professional, artistic, and protective painting solutions across North and South Goa.
        </p>
        <br />
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