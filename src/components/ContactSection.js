'use client'; // Mark as Client Component

import { React, useState } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'; // Import icons

function ContactSection() {

  const { theme } = useTheme(); // Get the theme
  const isDark = theme === 'dark'; // Define isDark based on the theme
  const [index, setIndex] = useState(0);


  const emailAddress = 'aditigk9@gmail.com'; // Replace with your actual email
  const phoneNumber = '+91 9405875022'; // Replace with your actual phone number (with country code)
  const whatsappNumber = '919405875022'; // Replace with your actual WhatsApp number (with country code)
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your painting services.'); // Optional default message

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

return (
    <section id="contact" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <header>
              <h2>Contact InfinHues</h2>
              <p className="lead">
                Looking for reliable painters in Goa? Reach out for a free quote. We serve residential, commercial, and industrial clients across the state.
              </p>
            </header>
            <address className="d-flex flex-column align-items-center not-italic">
              <div className="mb-3">
                <FaEnvelope className="me-2" size={24} />
                <a href={`mailto:${emailAddress}`} className={`text-decoration-none`}>
                  {emailAddress}
                </a>
              </div>
              <div className="mb-3">
                <FaPhone className="me-2" size={24} />
                <a href={`tel:${phoneNumber}`} className={`text-decoration-none`}>
                  {phoneNumber}
                </a>
              </div>
              <div>
                <FaWhatsapp className="me-2 text-success" size={24} />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-decoration-none`}
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </address>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;