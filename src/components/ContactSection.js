'use client'; // Mark as Client Component

import { React, useState } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'; // Import icons

function ContactSection() {

  const { theme } = useTheme(); // Get the theme
  const isDark = theme === 'dark'; // Define isDark based on the theme
  const [index, setIndex] = useState(0);


  const emailAddress = 'your-email@example.com'; // Replace with your actual email
  const phoneNumber = '+91 12345 67890'; // Replace with your actual phone number (with country code)
  const whatsappNumber = '+91 98765 43210'; // Replace with your actual WhatsApp number (with country code)
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your painting services.'); // Optional default message

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <h2 className="text-center mb-4">Contact Us for a Free Quote</h2>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p className="lead mb-4">
              Get in touch for a free quote! We are serving Siolim, Goa, and the surrounding areas. Choose your preferred contact method:
            </p>
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <FaEnvelope className="me-2" size={24} />
                <a href={`mailto:${emailAddress}`} className={`text-decoration-none ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                  Email us at: {emailAddress}
                </a>
              </div>
              <div className="mb-3">
                <FaPhone className="me-2" size={24} />
                <a href={`tel:${phoneNumber}`} className={`text-decoration-none ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                  Call us at: {phoneNumber}
                </a>
              </div>
              <div>
                <FaWhatsapp className="me-2 text-success" size={24} />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`text-decoration-none ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;