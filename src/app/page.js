import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div>
        <GallerySection serviceType="interior" title="Interior Painting Portfolio" />
        <GallerySection serviceType="exterior" title="Exterior Painting Portfolio" />
        <GallerySection serviceType="commercial" title="Commercial Painting Portfolio" />
    </div>
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
