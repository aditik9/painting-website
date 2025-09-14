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
          <section>
             <header>
              <h2>About InfinHues – Painting Experts in Goa</h2>
            </header>
            <table id="about_items">
              <tr>
               ✅ Over <strong>15 years of experience</strong> in the painting industry
              </tr>
              <tr>
               🏠 Providing expert <strong>residential, commercial, and industrial painting services</strong>
              </tr>
              <tr>
               🎨 Specializing in <strong>interior and exterior painting</strong>, waterproofing solutions, and custom decorative finishes such as murals and textures
 
              </tr>
              <tr>
              👷‍♂️ Team of <strong>skilled, reliable painting contractors</strong> using top-grade, weather-resistant materials

              </tr>
              <tr>
              🏢 Trusted by <strong>homeowners, offices, shops, housing societies, temples, and churches</strong>
               </tr>
               <tr>
                ⭐ Committed to <strong>quality craftsmanship, durability, and timely project completion</strong>
               </tr>

              
            </table>
          </section>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default AboutSection;