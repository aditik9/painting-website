import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="hero" className="hero-section py-5">
      <div className="hero-background"></div> {/* Div for background image */}
      <Container className="text-center hero-content"> {/* Added hero-content class */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="display-4">[Your Company Name] - Professional Painting in Panaji, Goa</h1>
            <p className="lead">Transforming homes and businesses with quality painting services.</p>
            <Button variant="warning" size="lg" href="#contact">Get a Free Quote</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;