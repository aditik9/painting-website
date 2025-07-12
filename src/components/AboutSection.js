'use client'; // This line tells Next.js to treat this as a Client Component

import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from 'next-themes';

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

//   return (
//     <section id="about" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        
//       <Container>
//         <Row>
//           <Col md={8}>
//             <h2>About Us</h2>
//               With 15 years of experience, InfinHues is a leading painting contractor company serving both North and South Goa. 
//               InfinHues offers skilled painting contractors dedicated to quality and customer satisfaction in Panaji and beyond. 
//               We meticulously transform homes, offices, and commercial properties across Goa, using top-tier materials for lasting beauty. 
//               Our team of skilled and dedicated painters is committed to delivering exceptional results and 
//               exceeding your expectations on every project. 
//               Experience the InfinHues difference, wherever you are in North or South Goa.
//             {/* Add more details about your company */}
//           </Col>
//           <Col md={8}>
//             {/* You can add an image related to your company here */}
//             {/* <img src="/images/about-us.jpg" alt="About Our Company" className="img-fluid rounded" /> */}
//           </Col>
//         </Row>
//       </Container>
      
//     </section>
//   );
// }

return (
    <section id="about" className={`${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row>
          <Col md={12}>
            <header>
              <h2>About InfinHues – Trusted Painting Contractors in Goa</h2>
            </header>
            <p className="lead">
              With 15+ years of experience, <strong>InfinHues</strong> is a leading painting company serving both North and South Goa.
              Our skilled contractors bring vibrant color, durability, and quality craftsmanship to homes, offices, shops, housing societies, and cultural spaces like temples and churches.
            </p>
            <p  className="lead">
              We’re proud to deliver reliable painting services in Panaji, Mapusa, Margao, Vasco, Ponda, and all major regions of Goa. Whether it’s residential, commercial, or industrial work, InfinHues ensures excellence every time.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default AboutSection;