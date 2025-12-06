import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Thermometer, Wrench, Award } from "lucide-react";

const AirConditioningTraining = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.americanskilledtradeuniversity.edu/air-conditioning-training-sacramento#course",
        "name": "Air Conditioning Training Sacramento",
        "description": "Professional air conditioning and AC repair training in Sacramento, California. Learn residential and commercial AC installation, maintenance, and troubleshooting.",
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
        "educationalCredentialAwarded": "HVAC/AC Technician Certificate",
        "occupationalCategory": ["49-9021.00", "HVAC Technician", "AC Technician"],
        "teaches": ["Air Conditioning Installation", "AC Repair", "Refrigerant Handling", "Electrical Systems", "System Diagnostics"],
        "offers": {
          "@type": "Offer",
          "category": "Air Conditioning Training",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I become an AC technician in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To become an AC technician in Sacramento, enroll in American Institute of Trades' HVAC program. You'll learn air conditioning installation, repair, and maintenance, plus earn EPA 608 certification required to handle refrigerants."
            }
          },
          {
            "@type": "Question",
            "name": "How long is air conditioning training in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our comprehensive air conditioning training program in Sacramento can be completed in approximately 6 months. This includes hands-on training, classroom instruction, and certification preparation."
            }
          },
          {
            "@type": "Question",
            "name": "What certifications do AC technicians need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AC technicians need EPA 608 certification to handle refrigerants. Our Sacramento training program prepares you for this certification plus OSHA safety certification. California may require additional licensing."
            }
          },
          {
            "@type": "Question",
            "name": "How much do AC technicians make in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AC and HVAC technicians in Sacramento earn competitive wages. Entry-level positions start around $40,000-$50,000 annually, with experienced technicians earning $60,000-$80,000 or more depending on specialization."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/air-conditioning-training-sacramento",
        "name": "Air Conditioning Training Sacramento | AC Technician School | AIT",
        "description": "Learn air conditioning repair and installation in Sacramento. Professional AC technician training with hands-on experience and EPA certification. Enroll at AIT!",
        "breadcrumb": {
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
              "name": "Air Conditioning Training Sacramento",
              "item": "https://www.americanskilledtradeuniversity.edu/air-conditioning-training-sacramento"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Air Conditioning Training Sacramento | AC Technician School | American Institute of Trades</title>
        <meta name="description" content="Learn air conditioning repair and installation in Sacramento at American Institute of Trades. Professional AC technician training with hands-on experience and EPA certification. Enroll now!" />
        <meta name="keywords" content="air conditioning training Sacramento, AC technician training Sacramento, AC repair school Sacramento, air conditioning school Sacramento, HVAC AC training, learn AC repair Sacramento, AC technician certification, air conditioning classes Sacramento, AC installation training, cooling system training Sacramento" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/air-conditioning-training-sacramento" />
        <meta property="og:title" content="Air Conditioning Training Sacramento | American Institute of Trades" />
        <meta property="og:description" content="Professional AC technician training in Sacramento. Learn air conditioning repair and installation with hands-on experience." />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/air-conditioning-training-sacramento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Air Conditioning Training in Sacramento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Master air conditioning installation, repair, and maintenance at American Institute of Trades. 
              Sacramento's trusted AC technician training program.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8">
                Start AC Training
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">What You'll Learn in AC Training</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <Thermometer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Refrigeration Cycles</h3>
                <p className="text-muted-foreground">
                  Understand how AC systems cool air using refrigerant compression and expansion
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">System Installation</h3>
                <p className="text-muted-foreground">
                  Learn proper installation of split systems, central AC, and ductless units
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
                <p className="text-muted-foreground">
                  Diagnose and repair common AC problems including refrigerant leaks and compressor issues
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Sacramento AC Training Program Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Residential AC Systems</h3>
                  <p className="text-muted-foreground">Central air, split systems, and window units</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Commercial HVAC</h3>
                  <p className="text-muted-foreground">Large-scale cooling systems for commercial buildings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Ductless Mini-Splits</h3>
                  <p className="text-muted-foreground">Installation and service of modern ductless systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Heat Pumps</h3>
                  <p className="text-muted-foreground">Dual-purpose heating and cooling systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Refrigerant Handling</h3>
                  <p className="text-muted-foreground">Safe handling, recovery, and charging of refrigerants</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Electrical Controls</h3>
                  <p className="text-muted-foreground">Thermostats, contactors, and control circuits</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Become an AC Technician in Sacramento</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              With Sacramento's hot summers, skilled AC technicians are always in demand. 
              Start your training at American Institute of Trades today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">Apply Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AirConditioningTraining;
