import SeoMetadata from '../components/SeoMetadata'; // Add this at the top
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import WhyChooseUsSection from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <>
      <SeoMetadata />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />

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
