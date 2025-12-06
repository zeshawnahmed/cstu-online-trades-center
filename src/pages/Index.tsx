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
    ? 'HVAC Training Sacramento | Sacramento Trade School | American Institute of Trades'
    : 'Capacitación HVAC Sacramento | Escuela de Oficios Sacramento | AIT';
  
  const seoDescription = language === 'en'
    ? 'American Institute of Trades (AIT) - Sacramento\'s #1 trade school for HVAC training. Affordable HVAC technician certification with EPA 608 training and hands-on field experience. Best HVAC school near me in Sacramento, California.'
    : 'American Institute of Trades (AIT) - La escuela de oficios #1 de Sacramento para capacitación HVAC. Certificación de técnico HVAC asequible con capacitación EPA 608 y experiencia práctica.';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={language === 'en' 
          ? "HVAC training Sacramento, Sacramento trade school, HVAC school near me, HVAC technician training Sacramento, EPA 608 certification Sacramento, trade school Sacramento CA, HVAC certification program, Sacramento HVAC school, affordable HVAC training, vocational training Sacramento, skilled trades Sacramento, AIT, American Institute of Trades, best trade school Sacramento, HVAC career training, HVAC classes Sacramento"
          : "Capacitación HVAC Sacramento, Escuela de oficios Sacramento, Escuela HVAC cerca de mí, Certificación EPA 608 Sacramento, Escuela de oficios Sacramento CA, AIT, American Institute of Trades"
        } />
        <meta name="author" content="American Institute of Trades" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu" />
        
        {/* Primary Organization Schema - Trade School */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": ["TradeSchool", "EducationalOrganization", "LocalBusiness"],
              "@id": "https://www.americanskilledtradeuniversity.edu/#organization",
              "name": "American Institute of Trades",
              "alternateName": ["AIT", "Sacramento Trade School", "Sacramento HVAC School"],
              "description": "Sacramento's #1 trade school for HVAC training. Affordable HVAC technician certification with EPA 608 training and hands-on field experience.",
              "url": "https://www.americanskilledtradeuniversity.edu",
              "logo": "https://www.americanskilledtradeuniversity.edu/og-image.png",
              "image": "https://www.americanskilledtradeuniversity.edu/og-image.png",
              "telephone": "(916) 365-6907",
              "email": "info@americanskilledtradeuniversity.edu",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sacramento",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "postalCode": "95814",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.575764",
                "longitude": "-121.478851"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Sacramento",
                  "sameAs": "https://en.wikipedia.org/wiki/Sacramento,_California"
                },
                {
                  "@type": "State",
                  "name": "California"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "38.575764",
                  "longitude": "-121.478851"
                },
                "geoRadius": "50 mi"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/americanskilledtradeuniversity",
                "https://www.instagram.com/astuuniversity"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "HVAC Training Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "HVAC Technician Training & EPA 608 Certification",
                      "description": "Comprehensive HVAC training program in Sacramento with EPA 608 certification. Learn heating, ventilation, and air conditioning systems with hands-on field experience.",
                      "provider": {
                        "@type": "Organization",
                        "name": "American Institute of Trades",
                        "sameAs": "https://www.americanskilledtradeuniversity.edu"
                      },
                      "educationalCredentialAwarded": "EPA 608 Certification",
                      "occupationalCategory": "HVAC Technician",
                      "timeToComplete": "P12W"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </script>

        {/* Course Schema for HVAC Training */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "HVAC Training Sacramento - Technician Certification Program",
              "description": "Professional HVAC technician training in Sacramento, CA. Learn heating, ventilation, air conditioning repair and installation. Includes EPA 608 certification preparation.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "American Institute of Trades",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Sacramento",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                }
              },
              "educationalCredentialAwarded": "EPA 608 Certification",
              "occupationalCategory": ["HVAC Technician", "Heating and Cooling Technician", "HVAC Installer"],
              "coursePrerequisites": "High school diploma or equivalent",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "blended",
                "location": {
                  "@type": "Place",
                  "name": "American Institute of Trades - Sacramento Campus",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sacramento",
                    "addressRegion": "CA"
                  }
                }
              }
            }
          `}
        </script>

        {/* FAQ Schema for common searches */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best HVAC training school in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "American Institute of Trades (AIT) is Sacramento's top-rated HVAC training school, offering comprehensive technician certification with EPA 608 training and hands-on field experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does HVAC training take in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our HVAC training program in Sacramento can be completed in approximately 12 weeks, combining classroom instruction with practical field training."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a trade school near me in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! American Institute of Trades is located in Sacramento, CA and offers affordable HVAC technician training with flexible scheduling options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What certifications do you get from Sacramento HVAC training?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Sacramento HVAC training program prepares you for EPA 608 certification, which is required for handling refrigerants in HVAC systems."
                  }
                }
              ]
            }
          `}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.americanskilledtradeuniversity.edu/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "HVAC Training Sacramento",
                  "item": "https://www.americanskilledtradeuniversity.edu/program/hvac"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <NewsTicker />
      <HeroSection scrollToPrograms={scrollToPrograms} />
      <ProgramsSection />
      
      {/* Disclaimer */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            {language === 'en'
              ? "AIT does not guarantee job placement or salary listed on site"
              : "AIT no garantiza la colocación laboral o el salario listado en el sitio"
            }
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
