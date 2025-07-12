'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme
import { Container, Carousel } from 'react-bootstrap';
import Image from 'next/image';

// Import your images
import interior1 from './../../public/vercel.svg';
import interior2 from './../../public/vercel.svg';
import exterior1 from './../../public/vercel.svg';
import exterior2 from './../../public/vercel.svg';
import commercial1 from './../../public/vercel.svg';
import commercial2 from './../../public/vercel.svg';

const serviceGalleryImages = {
  interior: [
    { src: interior1, alt: 'Interior painting project 1' },
    { src: interior2, alt: 'Interior painting project 2' },
    // Add more interior images
  ],
  exterior: [
    { src: exterior1, alt: 'Exterior painting work 1' },
    { src: exterior2, alt: 'Exterior painting work 2' },
    // Add more exterior images
  ],
  commercial: [
    { src: commercial1, alt: 'Commercial painting example 1' },
    { src: commercial2, alt: 'Commercial painting example 2' },
    // Add more commercial images
  ],
};

// Define your desired aspect ratio
const aspectRatio = 9 / 16 * 100;

function GallerySection({ serviceType, title }) {

  const { theme } = useTheme(); // Get the theme
  const isDark = theme === 'dark'; // Define isDark based on the theme
  const [index, setIndex] = useState(0);
  const images = serviceGalleryImages[serviceType] || [];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  if (images.length === 0) {
    return null; // Or a message indicating no images for this service
  }

  return (
    <section id="gallery" className={`py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <h3 className="text-center mb-4">{title}</h3>
        <div className="carousel-wrapper">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls indicators slide>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <div className="carousel-image-container">
                  <Image
                    className='content'
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

export default GallerySection;