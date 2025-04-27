'use client';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== scrolled) {
        setScrolled(isTop);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const navbarClassBase = `fixed-top shadow-sm navbar-expand-lg`;
  const navbarBgClass = isDark ? 'bg-dark' : 'bg-light';
  const navbarVariant = isDark ? 'dark' : 'light';
  const navbarTextColorClass = scrolled ? `text-${navbarVariant}` : 'text-white';
  const navbarClass = `${navbarClassBase} ${navbarBgClass} navbar-${navbarVariant} ${navbarTextColorClass}`;
  const togglerVariant = isDark ? 'navbar-dark' : 'navbar-light';

  return (
    <Navbar
      ref={navbarRef}
      variant={navbarVariant} // Use variant for basic text color in non-scrolled state
      expand="lg"
      className={navbarClass}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} href="/">
          Your Company Name
        </Navbar.Brand>
        <div className="d-flex align-items-center"> {/* Container for toggler and nav links */}
          <Button onClick={toggleNavbar} aria-controls="responsive-navbar-nav" aria-expanded={isOpen} className={`${togglerVariant} navbar-toggler me-2 d-lg-none`}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="responsive-navbar-nav" className={`${isOpen ? 'show' : ''} mobile-slide-right`}>
            <Nav className="me-auto me-lg-0"> {/* Removed me-auto, added me-lg-0 */}
              <Nav.Link as={Link} href="#hero" onClick={closeNavbar}>Home</Nav.Link>
              <Nav.Link as={Link} href="#about" onClick={closeNavbar}>About Us</Nav.Link>
              <Nav.Link as={Link} href="#services" onClick={closeNavbar}>Services</Nav.Link>
              <Nav.Link as={Link} href="#gallery" onClick={closeNavbar}>Gallery</Nav.Link>
              <Nav.Link as={Link} href="#testimonials" onClick={closeNavbar}>Testimonials</Nav.Link>
              <Nav.Link as={Link} href="#contact" onClick={closeNavbar}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;