
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

// Add some fake image placeholders until real images are added
const placeholderImages = [
  { path: '/hero-image.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { path: '/sacramento-campus.jpg', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' },
  { path: '/hvac-program.jpg', url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4' },
  { path: '/plumbing-program.jpg', url: 'https://images.unsplash.com/photo-1558618666-5b39b7e6193a' },
  { path: '/welding-program.jpg', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122' },
  { path: '/testimonial-1.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { path: '/testimonial-2.jpg', url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e' },
  { path: '/testimonial-3.jpg', url: 'https://images.unsplash.com/photo-1548449112-96a38a643324' },
  { path: '/grid-pattern.svg', url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==' },
  { path: '/favicon.png', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMNSURBVFhH7ZZNaBNBFMf/m93sJjVpYmkbW0QqUhRasVRFKB5E8FjwIAgiHhQ8ePEgHjx4EcGLFw+CB0GKKHgQRFCKglI/UKuiIdAPbBqtbWKSJvke2d1k4zbUoB+QDvzYmTfz5v/evPeSGYqiQIMZ/j/MtYBt21hbW0OlUkGtVoPP54Pf78fIyAiCwSD/yhvWBUilUroxjuMgHA4jEokgEAjwhHesCTx69AQvXr7WP7Esi4PbeH//vhbwiq4lfPz0Wds9PT34+q2KbDarg3s9n+8q4JkEUZQkITqdVF5f/6F9MzMzWFlZ4ZlvdBVAJYxEo8gmz+PG9RPIpC+h8Wcew8PDOqfRXQvJvDOzkxgfH4eu0gB9VFhDjdvN91/wLBaLmJubw6NHj5FKpdDX18fhDrqWUFnScKMOGh8fx927d3T/E9NTuPX8LJaXl7WIhYUFPH36DI1GgzMadC2hYRi7BIyPjWlbHkWUkikxxPPnz1EuV/iNBt2QyETsToCY0tNzY+LcJJLJJCoVW6dQB/ckoLS4uIhKpYzi8jKymTQ/bUOv0/6/FiKvBUTN77JJb4AyLhT+VUI3Ae1Z0PF9FbDFdEk+n0c0GsXV69fx+s1bTE1N6T5rH5FvAhKJBA4dOoJLS0vI5XLI5/O6tySCkgljvwQ0qVYt5HI5Pau5XA6ZTAaNxjo/aeObgFAohKPHjuH+gwf6gJGJKBQKsKy63oSE/RQQCoZw7NhRzB46iLPnzusSLi0tNffCNtuQdjVlJmCvUyUq9XodB2YO6PsnJibw8eNnnsVLU1PT69Z3MTPJ2UChUNAzRJXa3k6o+F4VdHEKw3CqrJnAg4ePYZo97f9C9n5XAdFoVC/F9n0+vxc2uuRAW02WA+X27dv6rRAIBPU5QK1Jm5ZuQlhQW8L29rfnOwX6/T2axydO4O3bd7rnN27fQnV1lTNMntnWKGC5XNJ2MBjkrDaiQXovfAObP//o5NNvhGq1qm+5h3cw0n92bN3j9Xqd4xbtB8kW+xbgFf8AFbTCb5ggxYwAAAAASUVORK5CYII=' }
];

const Index = () => {
  // Preload images
  useEffect(() => {
    placeholderImages.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      if (window.location.hostname === 'localhost') {
        // Only for development to simulate image loading
        console.log(`Preloaded image: ${img.path}`);
      }
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
