
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

// Add some fake image placeholders until real images are added
const placeholderImages = [
  { path: '/hero-image.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { path: '/hvac-program.jpg', url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4' },
  { path: '/plumbing-program.jpg', url: 'https://images.unsplash.com/photo-1558618666-5b39b7e6193a' },
  { path: '/grid-pattern.svg', url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==' },
  { path: '/favicon.png', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMNSURBVFhH7ZZNaBNBFMf/m93sJjVpYmkbW0QqUhRasVRFKB5E8FjwIAgiHhQ8ePEgHjx4EcGLFw+CB0GKKHgQRFCKglI/UKuiIdAPbBqtbWKSJvke2d1k4zbUoB+QDvzYmTfz5v/evPeSGYqiQIMZ/j/MtYBt21hbW0OlUkGtVoPP54Pf78fIyAiCwSD/yhvWBUilUroxjuMgHA4jEokgEAjwhHesCTx69AQvXr7WP7Esi4PbeH//vhbwiq4lfPz0Wts9PT34+q2KbDarg3s9n+8q4JkEUZQkITqdVF5f/6F9MzMzWFlZ4ZlvdBVAJYxEo8gmz+PG9RPIpC+h8Wcew8PDOqfRXQvJvDOzkxgfH4eu0gB9VFhDjdvN91/wLBaLmJubw6NHj5FKpdDX18fhDrqWUFnScKMOGh8fx927d3T/E9NTuPX8LJaXl7WIhYUFPH36DI1GgzMadC2hYRi7BIyPjWlbHkWUkikxxPPnz1EuV/iNBt2QyETsToCY0tNzY+LcJJLJJCoVW6dQB/ckoLS4uIhKpYzi8jKymTQ/bUOv0/6/FiKvBUTN77JJb4AyLhT+VUI3Ae1Z0PF9FbDFdEk+n0c0GsXV69fx+s1bTE1N6T5rH5FvAhKJBA4dOoJLS0vI5XLI5/O6tySCkgljvwQ0qVYt5HI5Pau5XA6ZTAaNxjo/aeObgFAohKPHjuH+gwf6gJGJKBQKsKy63oSE/RQQCoZw7NhRzB46iLPnzusSLi0tNffCNtuQdjVlJmCvUyUq9XodB2YO6PsnJibw8eNnnsVLU1PT69Z3MTPJ2UChUNAzRJXa3k6o+F4VdHEKw3CqrJnAg4ePYZo97f9C9n5XAdFoVC/F9n0+vxc2uuRAW02WA+X27dv6rRAIBPU5QK1Jm5ZuQlhQW8L29rfnOwX6/T2axydO4O3bd7rnN27fQnV1lTNMntnWKGC5XNJ2MBjkrDaiQXovfAObP//o5NNvhGq1qm+5h3cw0n92bN3j9Xqd4xbtB8kW+xbgFf8AFbTCb5ggxYwAAAAASUVORK5CYII=' }
];

const scrollToPrograms = () => {
  const programsSection = document.getElementById('programs-section');
  if (programsSection) {
    programsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Index = () => {
  const { language } = useLanguage();

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

  // SEO Helmet data with translations
  const seoTitle = language === 'en' 
    ? 'California Skilled Trade University | HVAC & Electrician Training Sacramento'
    : 'Universidad de Oficios Especializados de California | Capacitación de HVAC y Electricista en Sacramento';
  
  const seoDescription = language === 'en'
    ? 'California Skilled Trade University offers affordable entry-level HVAC training and Electrician training in Sacramento. Learn essential skills through self-paced online programs with hands-on training. Best HVAC and Electrician training near you.'
    : 'Universidad de Oficios Especializados de California ofrece capacitación asequible de HVAC y Electricista de nivel inicial en Sacramento. Aprende habilidades esenciales a través de programas en línea a tu propio ritmo con capacitación práctica.';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={language === 'en' 
          ? "HVAC training Sacramento, Electrician training Sacramento, HVAC training near me, Electrician training near me"
          : "Capacitación de HVAC Sacramento, Capacitación de Electricista Sacramento, capacitación de HVAC cerca de mí, capacitación de Electricista cerca de mí"
        } />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.californiaskilledtradeuniversity.edu" />
      </Helmet>
      <HeroSection scrollToPrograms={scrollToPrograms} />
      <ProgramsSection />
    </Layout>
  );
};

export default Index;
