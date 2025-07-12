// components/WhyChooseUsSection.js
'use client';

import { Container } from 'react-bootstrap';
import { useTheme } from 'next-themes';

function WhyChooseUsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="lead">
        <h2>Why InfinHues is Goa’s Most Trusted Painting Contractor</h2>
        <ul>
          <li>15+ Years of Experience</li>
          <li>Skilled & Verified Painters</li>
          <li>High-Quality Materials</li>
          <li>Customized Painting Solutions</li>
          <li>Timely Completion & Transparent Pricing</li>
        </ul>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;
