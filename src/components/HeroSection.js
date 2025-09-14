import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="hero" className="hero-section py-5">
      <div className="hero-background"></div> {/* Div for background image */}
      <Container className="text-center"> {/* Added hero-content class */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="hero-content">
              <div id="headlines">

                <h1 className="display-4"  data-seo-title="InfinHues: Your Trusted Painting Contractors in Panaji, Goa, India">
                Goa’s Leading Painting Experts
              </h1>
              <p className="lead hero-description" data-seo-description="Transform your home, office, or commercial space in Panaji, Goa with InfinHues. Expert color consultation to flawless finishes.">
                Trusted by Homes & Businesses for Quality & Durability.
From interiors to exteriors, we bring your space to life with skilled painters & premium materials
                <br />
                ⭐ <strong><em>Trusted by 200+ Clients in Goa</em></strong> | 
                🏆 <strong><em>10+ Years of Painting Excellence in Goa</em></strong> | 
                🛡️ <strong><em>100% Satisfaction Guarantee</em></strong>
              </p>
              <div className="hero-buttons">
                <Button variant="warning" size="lg" href="#contact" aria-label="Get a Free Quote from InfinHues" data-call-to-action="get-quote">Get a Free Quote</Button>
              </div>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;