import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import NewsTicker from '@/components/sections/NewsTicker';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

// Add some fake image placeholders until real images are added
const placeholderImages = [
  { path: '/hero-image.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { path: '/truck-driving-program.jpg', url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13' },
  { path: '/grid-pattern.svg', url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==' },
  { path: '/favicon.png', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMNSURBVFhH7ZZNaBNBFMf/m93sJjVpYmkbW0QqUhRasVRFKB5E8FjwIAgiHhQ8ePEgHjx4EcGLFw+CB0GKKHgQRFCKglI/UKuiIdAPbBqtbWKSJvke2d1k4zbUoB+QDvzYmTfz5v/evPeSGYqiQIMZ/j/MtYBt21hbW0OlUkGtVoPP54Pf78fIyAiCwSD/yhvWBUilUroxjuMgHA4jEokgEAjwhHesCTx69AQvXr7WP7Isi4PbeH//vhbwiq4lfPz0Wts9PT34+q2KbDarg3s9n+8q4JkEUZQkITqdVF5f/6F9MzMzWFlZ4ZlvdBVAJYxEo8gmz+PG9RPIpC+h8Wcew8PDOqfRXQvJvDOzkxgfH4eu0gB9VFhDjdvN91/wLBaLmJubw6NHj5FKpdDX18fhDrqWUFnScKMOGh8fx927d3T/E9NTuPX8LJaXl7WIhYUFPH36DI1GgzMadC2hYRi7BIyPjWlbHkWUkikxxPPnz1EuV/iNBt2QyETsToCY0tNzY+LcJJLJJCoVW6dQB/ckoLS4uIhKpYzi8jKymTQ/bUOv0/6/FiKvBUTN77JJb4AyLhT+VUI3Ae1Z0PF9FbDFdEk+n0c0GsXV69fx+s1bTE1N6T5rH5FvAhKJBA4dOoJLS0vI5XLI5/O6tySCkgljvwQ0qVYt5HI5Pau5XA6ZTAaNxjo/aeObgFAohKPHjuH+gwf6gJGJKBQKsKy63oSE/RQQCoZw7NhRzB46iLPnzusSLi0tNffCNtuQdjVlJmCvUyUq9XodB2YO6PsnJibw8eNnnsVLU1PT69Z3MTPJ2UChUNAzRJXa3k6o+F4VdHEKw3CqrJnAg4ePYZo97f9C9n5XAdFoVC/F9n0+vxc2uuRAW02WA+X27dv6rRAIBPU5QK1Jm5ZuQlhQW8L29rfnOwX6/T2axydO4O3bd7rnN27fQnV1lTNMntnWKGC5XNJ2MBjkrDaiQXovfAObP//o5NNvhGq1qm+5h3cw0n92bN3j9Xqd4xbtB8kW+xbgFf8AFbTCb5ggxYwAAAAASUVORK5CYII=' }
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

  // SEO Helmet data with translations and enhanced for local search
  const seoTitle = language === 'en' 
    ? 'Skilled Trade Mastery and Your Prosperous Future Begins Here.'
    : 'Skilled Trade Mastery and Your Prosperous Future Begins Here.';
  
  const seoDescription = language === 'en'
    ? 'American Skilled Trade University (ASTU) offers affordable Commercial Truck Driving and CDL training in Sacramento. Find the best CDL school near me and top Commercial Truck Driving school in Sacramento with Job Site/Field training. Sacramento\'s #1 trade school for CDL and Commercial Driving career training.'
    : 'Universidad de Oficios Especializados Americana ofrece capacitación asequible de Manejo de Camiones Comerciales y CDL en Sacramento. La mejor escuela de CDL y de Manejo de Camiones cerca de ti con capacitación práctica.';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={language === 'en' 
          ? "CDL school near me, Commercial Truck Driving school near me, Sacramento CDL school, Sacramento Truck Driving school, CDL training Sacramento, Commercial Driving training Sacramento, Sacramento trade school, AIT, American Institute of Trades, best CDL school, top Truck Driving school, trade school near me, affordable trade school Sacramento"
          : "Escuela de CDL cerca de mí, Escuela de Manejo de Camiones cerca de mí, Escuela de CDL Sacramento, Escuela de Manejo de Camiones Sacramento, Capacitación de CDL, Capacitación de Manejo Comercial, Escuela de oficios Sacramento"
        } />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu" />
        
        {/* Structured data for local business - helps with local SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechnicalSchool",
               "name": "American Institute of Trades",
               "alternateName": "AIT",
              "image": "https://www.americanskilledtradeuniversity.edu/og-image.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "url": "https://www.americanskilledtradeuniversity.edu",
              "telephone": "(916) 365-6907",
              "priceRange": "$$$",
              "description": "American Institute of Trades (AIT) offers affordable Commercial Truck Driving and CDL training in Sacramento with hands-on experience and job-ready skills. The best CDL and Commercial Truck Driving school near you.",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.575764",
                "longitude": "-121.478851"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trade Programs",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Commercial Truck Driving & CDL Training",
                    "description": "Learn essential skills to become job-ready in commercial truck driving with CDL Class A or B license, plus optional Hazmat Endorsement.",
                    "provider": {
                      "@type": "Organization",
                      "name": "American Institute of Trades",
                      "sameAs": "https://www.americanskilledtradeuniversity.edu"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/americanskilledtradeuniversity",
                "https://www.instagram.com/astuuniversity"
              ]
            }
          `}
        </script>
      </Helmet>
      <NewsTicker />
      <HeroSection scrollToPrograms={scrollToPrograms} />
      <ProgramsSection />
    </Layout>
  );
};

export default Index;
