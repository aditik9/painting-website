import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="hero" className="hero-section py-5">
      <div className="hero-background"></div> {/* Div for background image */}
      <Container className="text-center"> {/* Added hero-content class */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="hero-content">
              <h1 className="display-4"  data-seo-title="InfinHues: Your Trusted Painting Contractors in Panaji, Goa, India">
                Professional Painting Services in Goa – Trusted by Homes & Businesses
              </h1>
              <p className="lead hero-description" data-seo-description="Transform your home, office, or commercial space in Panaji, Goa with InfinHues. Expert color consultation to flawless finishes.">
                InfinHues offers expert residential, commercial, and industrial painting services across North & South Goa. From interior makeovers to exterior finishes, waterproofing, murals, and more — we deliver high-quality, durable results with skilled painters and top-grade materials.
              </p>
              <div className="hero-buttons">
                <Button variant="warning" size="lg" href="#contact" aria-label="Get a Free Quote from InfinHues" data-call-to-action="get-quote">Get a Free Quote</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;