import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="hero" className="hero-section py-5">
      <div className="hero-background"></div> {/* Div for background image */}
      <Container className="text-center hero-content"> {/* Added hero-content class */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div class="hero-content">
              <h1 className="display-4"  data-seo-title="InfinHues: Your Trusted Painting Contractors in Panaji, Goa, India">
                InfinHues: Your Trusted Painting Contractors in Panaji, Goa, India
              </h1>
              <p class="lead hero-description" data-seo-description="Transform your home, office, or commercial space in Panaji, Goa with InfinHues. Expert color consultation to flawless finishes.">
                Transform your home, office, or commercial space with InfinHues. We offer a spectrum of high-quality painting services, from expert color consultation to flawless finishes, bringing your vision to life in Panaji, Goa and surrounding areas.
              </p>
              <div class="hero-buttons">
                <Button variant="warning" size="lg" href="#contact" aria-label="Get a Free Quote from InfinHues" data-call-to-action="get-quote">Get a Free Quote</Button>
                {/* <Button variant="warning" size="lg" href="#services" aria-label="View Our Painting Services" data-call-to-action="view-services">View Our Services</Button> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;