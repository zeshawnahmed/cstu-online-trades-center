import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import NewsTicker from '@/components/sections/NewsTicker';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';

// Preload critical images
const placeholderImages = [
  { path: '/hero-image.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { path: '/truck-driving-program.jpg', url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13' },
  { path: '/grid-pattern.svg', url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==' },
  { path: '/favicon.png', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMNSURBVFhH7ZZNaBNBFMf/m93sJjVpYmkbW0QqUhRasVRFKB5E8FjwIAgiHhQ8ePEgHjx4EcGLFw+CB0GKKHgQRFCKglI/UKuiIdAPbBqtbWKSJvke2d1k4zbUoB+QDvzYmTfz5v/evPeSGYqiQIMZ/j/MtYBt21hbW0OlUkGtVoPP54Pf78fIyAiCwSD/yhvWBUilUroxjuMgHA4jEokgEAjwhHesCTx69AQvXr7WP7Isi4PbeH//vhbwiq4lfPz0Wds9PT34+q2KbDarg3s9n+8q4JkEUZQkITqdVF5f/6F9MzMzWFlZ4ZlvdBVAJYxEo8gmz+PG9RPIpC+h8Wcew8PDOqfRXQvJvDOzkxgfH4eu0gB9VFhDjdvN91/wLBaLmJubw6NHj5FKpdDX18fhDrqWUFnScKMOGh8fx927d3T/E9NTuPX8LJaXl7WIhYUFPH36DI1GgzMadC2hYRi7BIyPjWlbHkWUkikxxPPnz1EuV/iNBt2QyETsToCY0tNzY+LcJJLJJCoVW6dQB/ckoLS4uIhKpYzi8jKymTQ/bUOv0/6/FiKvBUTN77JJb4AyLhT+VUI3Ae1Z0PF9FbDFdEk+n0c0GsXV69fx+s1bTE1N6T5rH5FvAhKJBA4dOoJLS0vI5XLI5/O6tySCkgljvwQ0qVYt5HI5Pau5XA6ZTAaNxjo/aeObgFAohKPHjuH+gwf6gJGJKBQKsKy63oSE/RQQCoZw7NhRzB46iLPnzusSLi0tNffCNtuQdjVlJmCvUyUq9XodB2YO6PsnJibw8eNnnsVLU1PT69Z3MTPJ2UChUNAzRJXa3k6o+F4VdHEKw3CqrJnAg4ePYZo97f9C9n5XAdFoVC/F9n0+vxc2uuRAW02WA+X27dv6rRAIBPU5QK1Jm5ZuQlhQW8L29rfnOwX6/T2axydO4O3bd7rnN27fQnV1lTNMntnWKGC5XNJ2MBjkrDaiQXovfAObP//o5NNvhGq1qm+5h3cw0n92bN3j9Xqd4xbtB8kW+xbgFf8AFbTCb5ggxYwAAAAASUVORK5CYII=' }
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

  // Enhanced SEO data for maximum search visibility
  const seoTitle = language === 'en' 
    ? 'Sacramento Trade School | HVAC Training Sacramento CA | American Institute of Trades'
    : 'Escuela de Oficios Sacramento | Capacitación HVAC Sacramento CA | AIT';
  
  const seoDescription = language === 'en'
    ? 'American Institute of Trades - Sacramento\'s #1 trade school. HVAC technician training with EPA 608 certification. Affordable vocational training near you in Sacramento, CA. Enroll today!'
    : 'American Institute of Trades - La escuela de oficios #1 de Sacramento. Capacitación de técnico HVAC con certificación EPA 608. ¡Inscríbete hoy!';

  const seoKeywords = language === 'en'
    ? 'Sacramento trade school, trade school Sacramento, HVAC training Sacramento, HVAC school Sacramento, Sacramento HVAC training, trade school near me Sacramento, vocational school Sacramento, HVAC technician training Sacramento CA, EPA 608 certification Sacramento, skilled trades Sacramento, best trade school Sacramento, affordable trade school Sacramento, HVAC classes Sacramento, air conditioning training Sacramento, heating and cooling school Sacramento, Sacramento vocational training, trade schools in Sacramento California, HVAC certification Sacramento CA, technical school Sacramento, career training Sacramento'
    : 'Escuela de oficios Sacramento, capacitación HVAC Sacramento, escuela HVAC Sacramento, certificación EPA 608 Sacramento, escuela vocacional Sacramento, oficios especializados Sacramento';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="author" content="American Institute of Trades" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="American Institute of Trades - Sacramento Trade School" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/" />
        <meta property="og:image" content="https://www.americanskilledtradeuniversity.edu/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://www.americanskilledtradeuniversity.edu/og-image.png" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento, California" />
        <meta name="geo.position" content="38.575764;-121.478851" />
        <meta name="ICBM" content="38.575764, -121.478851" />
        
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/" />
        
        {/* Primary Organization Schema - Trade School & Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": ["TradeSchool", "EducationalOrganization", "LocalBusiness", "VocationalEducation"],
              "@id": "https://www.americanskilledtradeuniversity.edu/#organization",
              "name": "American Institute of Trades",
              "alternateName": ["AIT", "Sacramento Trade School", "Sacramento HVAC School", "American Institute of Trades Sacramento", "Trade School Sacramento CA"],
              "description": "Sacramento's premier trade school offering HVAC technician training with EPA 608 certification. Affordable vocational education with hands-on training. Best trade school in Sacramento, California.",
              "slogan": "Sacramento's #1 Trade School for HVAC Training",
              "url": "https://www.americanskilledtradeuniversity.edu",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.americanskilledtradeuniversity.edu/og-image.png",
                "width": 1200,
                "height": 630
              },
              "image": [
                "https://www.americanskilledtradeuniversity.edu/og-image.png"
              ],
              "telephone": "(916) 365-6907",
              "email": "info@americanskilledtradeuniversity.edu",
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Credit Card, Personal Loans",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Downtown Sacramento",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "postalCode": "95814",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.575764,
                "longitude": -121.478851
              },
              "hasMap": "https://maps.google.com/?q=Sacramento+Trade+School",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Sacramento",
                  "sameAs": "https://en.wikipedia.org/wiki/Sacramento,_California"
                },
                {
                  "@type": "City",
                  "name": "Elk Grove"
                },
                {
                  "@type": "City",
                  "name": "Roseville"
                },
                {
                  "@type": "City",
                  "name": "Folsom"
                },
                {
                  "@type": "City",
                  "name": "Rancho Cordova"
                },
                {
                  "@type": "City",
                  "name": "Davis"
                },
                {
                  "@type": "State",
                  "name": "California",
                  "sameAs": "https://en.wikipedia.org/wiki/California"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 38.575764,
                  "longitude": -121.478851
                },
                "geoRadius": "80467"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "(916) 365-6907",
                  "contactType": "admissions",
                  "areaServed": "US",
                  "availableLanguage": ["English", "Spanish"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@americanskilledtradeuniversity.edu",
                  "contactType": "customer service",
                  "areaServed": "US"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/americanskilledtradeuniversity",
                "https://www.instagram.com/astuuniversity"
              ],
              "knowsAbout": [
                "HVAC Training",
                "Trade School Education",
                "EPA 608 Certification",
                "Vocational Training",
                "Skilled Trades",
                "HVAC Technician Certification",
                "Heating Ventilation Air Conditioning",
                "Career Training Sacramento"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trade School Programs Sacramento",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "HVAC Training Programs",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "EducationalOccupationalProgram",
                          "name": "HVAC Technician Training Program",
                          "description": "Complete HVAC training in Sacramento with EPA 608 certification. 12-week program with hands-on field experience.",
                          "provider": {
                            "@type": "EducationalOrganization",
                            "name": "American Institute of Trades"
                          },
                          "educationalCredentialAwarded": "EPA 608 Certification",
                          "occupationalCategory": ["47-2152.00", "HVAC Technician", "Heating and Cooling Technician"],
                          "timeToComplete": "P12W",
                          "programPrerequisites": "High school diploma or equivalent",
                          "occupationalCredentialAwarded": {
                            "@type": "EducationalOccupationalCredential",
                            "credentialCategory": "Professional Certification",
                            "name": "EPA 608 Universal Certification"
                          },
                          "offers": {
                            "@type": "Offer",
                            "price": "2500",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sacramento Graduate"
                  },
                  "reviewBody": "Best trade school in Sacramento! Got my HVAC certification and landed a great job."
                }
              ]
            }
          `}
        </script>

        {/* Course Schema for HVAC Training */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "@id": "https://www.americanskilledtradeuniversity.edu/program/hvac#course",
              "name": "HVAC Technician Training Sacramento - EPA 608 Certification Program",
              "description": "Professional HVAC technician training in Sacramento, California. Complete 12-week program covering heating, ventilation, air conditioning repair and installation. Includes EPA 608 certification preparation and hands-on field experience. Best HVAC training near Sacramento.",
              "provider": {
                "@type": "EducationalOrganization",
                "@id": "https://www.americanskilledtradeuniversity.edu/#organization",
                "name": "American Institute of Trades",
                "sameAs": "https://www.americanskilledtradeuniversity.edu"
              },
              "educationalCredentialAwarded": "EPA 608 Universal Certification",
              "occupationalCategory": ["47-2152.00", "HVAC Technician", "Heating and Cooling Technician", "HVAC Installer", "Air Conditioning Technician"],
              "coursePrerequisites": "High school diploma or equivalent",
              "educationalLevel": "Professional Certificate",
              "teaches": [
                "HVAC system installation",
                "Heating system repair",
                "Air conditioning maintenance",
                "Refrigerant handling",
                "EPA 608 regulations",
                "Electrical troubleshooting",
                "Ductwork design"
              ],
              "financialAidEligible": true,
              "numberOfCredits": 12,
              "timeToComplete": "P12W",
              "hasCourseInstance": [
                {
                  "@type": "CourseInstance",
                  "courseMode": ["blended", "online"],
                  "courseWorkload": "PT20H",
                  "instructor": {
                    "@type": "Person",
                    "name": "HVAC Industry Professional"
                  },
                  "location": {
                    "@type": "Place",
                    "name": "American Institute of Trades - Sacramento Campus",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Sacramento",
                      "addressRegion": "CA",
                      "postalCode": "95814",
                      "addressCountry": "US"
                    }
                  }
                }
              ],
              "offers": {
                "@type": "Offer",
                "price": "2500",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "priceValidUntil": "2025-12-31",
                "url": "https://www.americanskilledtradeuniversity.edu/program/hvac"
              }
            }
          `}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.americanskilledtradeuniversity.edu/#webpage",
              "url": "https://www.americanskilledtradeuniversity.edu/",
              "name": "Sacramento Trade School | HVAC Training Sacramento | American Institute of Trades",
              "description": "American Institute of Trades - Sacramento's #1 trade school for HVAC training. Affordable vocational training with EPA 608 certification.",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.americanskilledtradeuniversity.edu/#website",
                "url": "https://www.americanskilledtradeuniversity.edu/",
                "name": "American Institute of Trades",
                "publisher": {
                  "@id": "https://www.americanskilledtradeuniversity.edu/#organization"
                }
              },
              "about": {
                "@id": "https://www.americanskilledtradeuniversity.edu/#organization"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://www.americanskilledtradeuniversity.edu/og-image.png"
              },
              "breadcrumb": {
                "@id": "https://www.americanskilledtradeuniversity.edu/#breadcrumb"
              },
              "inLanguage": "en-US",
              "potentialAction": [
                {
                  "@type": "ReadAction",
                  "target": ["https://www.americanskilledtradeuniversity.edu/"]
                }
              ]
            }
          `}
        </script>

        {/* WebSite Schema with SearchAction */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.americanskilledtradeuniversity.edu/#website",
              "url": "https://www.americanskilledtradeuniversity.edu/",
              "name": "American Institute of Trades - Sacramento Trade School",
              "alternateName": ["AIT", "Sacramento Trade School", "HVAC Training Sacramento"],
              "description": "Sacramento's premier trade school for HVAC training and skilled trades education",
              "publisher": {
                "@id": "https://www.americanskilledtradeuniversity.edu/#organization"
              },
              "inLanguage": ["en-US", "es"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.americanskilledtradeuniversity.edu/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>

        {/* Comprehensive FAQ Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.americanskilledtradeuniversity.edu/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best trade school in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "American Institute of Trades (AIT) is Sacramento's top-rated trade school, offering affordable HVAC technician training with EPA 608 certification and hands-on field experience. Located in Sacramento, CA, AIT provides comprehensive vocational training to prepare students for careers in skilled trades."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best HVAC training school in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "American Institute of Trades is Sacramento's premier HVAC training school. Our comprehensive program includes EPA 608 certification training, hands-on field experience, and job-ready skills development. Students complete the program in just 12 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does HVAC training cost in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AIT offers affordable HVAC training in Sacramento for $2,500 flat-rate tuition with no hidden fees. This is significantly less than traditional colleges, which can cost $120,000+ for a 4-year degree. Financial aid options are available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does HVAC training take in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our HVAC training program in Sacramento can be completed in approximately 12 weeks. The program combines online self-paced learning with hands-on workshops held near Downtown Sacramento."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a trade school near me in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! American Institute of Trades is located in Sacramento, CA and serves the greater Sacramento area including Elk Grove, Roseville, Folsom, Rancho Cordova, and Davis. We offer flexible HVAC technician training with online and hands-on components."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What certifications do you get from Sacramento HVAC training?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Sacramento HVAC training program prepares you for EPA 608 Universal Certification, which is required by law for handling refrigerants in HVAC systems. This certification is recognized nationwide and essential for HVAC technician careers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the average HVAC technician salary in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVAC technicians in California earn a median salary of $63,420 per year or approximately $30.49 per hour according to TradeCareerPath. The industry is projected to grow 13% by 2030, making it an excellent career choice."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do Sacramento trade schools offer financial aid?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While AIT is not yet a Title IV school, we help students explore various financial options including personal loans from major lenders like Wells Fargo, U.S. Bank, and Discover. Many students also receive assistance from family or use co-signed loans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What careers can I get with HVAC training in Sacramento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HVAC training from AIT prepares you for careers as an HVAC Technician, Heating and Cooling Technician, HVAC Installer, Refrigeration Technician, and more. The skilled trades industry has high demand and job security."
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
              "@id": "https://www.americanskilledtradeuniversity.edu/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Sacramento Trade School",
                  "item": "https://www.americanskilledtradeuniversity.edu/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "HVAC Training Sacramento",
                  "item": "https://www.americanskilledtradeuniversity.edu/program/hvac"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Financial Aid",
                  "item": "https://www.americanskilledtradeuniversity.edu/financial-aid"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://www.americanskilledtradeuniversity.edu/contact"
                }
              ]
            }
          `}
        </script>

        {/* ItemList Schema for Programs */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Trade School Programs in Sacramento",
              "description": "Vocational training programs offered at American Institute of Trades in Sacramento, CA",
              "numberOfItems": 1,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "HVAC Technician Training Program",
                  "url": "https://www.americanskilledtradeuniversity.edu/program/hvac",
                  "description": "12-week HVAC training with EPA 608 certification in Sacramento"
                }
              ]
            }
          `}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Vocational Training",
              "name": "Trade School Education Sacramento",
              "description": "Professional vocational training and trade school education in Sacramento, California. Specializing in HVAC technician training with EPA 608 certification.",
              "provider": {
                "@id": "https://www.americanskilledtradeuniversity.edu/#organization"
              },
              "areaServed": {
                "@type": "City",
                "name": "Sacramento",
                "sameAs": "https://en.wikipedia.org/wiki/Sacramento,_California"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trade School Training Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "HVAC Training Sacramento",
                      "description": "Complete HVAC technician certification program"
                    }
                  }
                ]
              }
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
