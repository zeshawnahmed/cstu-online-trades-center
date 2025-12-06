import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building, Users, DollarSign, Clock } from "lucide-react";

const VocationalTraining = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.americanskilledtradeuniversity.edu/vocational-training-sacramento#school",
        "name": "American Institute of Trades - Sacramento Vocational School",
        "alternateName": ["AIT Sacramento", "Sacramento Vocational Training Center"],
        "description": "Premier vocational training and trade school in Sacramento, California. Offering HVAC technician training, skilled trades education, and career-focused certification programs.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sacramento",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": "Sacramento"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "HVAC Technician Certificate"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "EPA 608 Certification"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is vocational training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vocational training provides hands-on education for specific trades and careers. Unlike traditional college, vocational schools like American Institute of Trades in Sacramento focus on practical skills that prepare you for immediate employment in trades like HVAC."
            }
          },
          {
            "@type": "Question",
            "name": "What vocational programs are available in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "American Institute of Trades in Sacramento offers HVAC technician training programs. Our vocational training includes hands-on lab experience, EPA 608 certification, OSHA safety training, and job placement assistance."
            }
          },
          {
            "@type": "Question",
            "name": "Is vocational training better than college?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vocational training offers faster job entry, lower costs, and hands-on skills for specific careers. While college suits some careers, trades like HVAC offer excellent pay and job security without requiring a 4-year degree."
            }
          },
          {
            "@type": "Question",
            "name": "How much does vocational training cost in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vocational training at American Institute of Trades in Sacramento is significantly more affordable than traditional college. Financial aid is available for qualifying students. Contact us for current tuition information."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/vocational-training-sacramento",
        "name": "Vocational Training Sacramento | Trade School Programs | AIT",
        "description": "Sacramento vocational training and trade school programs at American Institute of Trades. Hands-on career education with job placement assistance. Enroll today!",
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
              "name": "Vocational Training Sacramento",
              "item": "https://www.americanskilledtradeuniversity.edu/vocational-training-sacramento"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>Vocational Training Sacramento | Trade School Programs | American Institute of Trades</title>
        <meta name="description" content="Sacramento vocational training and trade school programs at American Institute of Trades. Hands-on career education in HVAC with job placement assistance. Start your skilled trades career today!" />
        <meta name="keywords" content="vocational training Sacramento, vocational school Sacramento, trade school Sacramento CA, career training Sacramento, skilled trades training Sacramento, vocational education Sacramento, technical school Sacramento, job training Sacramento, vocational programs Sacramento, career college Sacramento" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/vocational-training-sacramento" />
        <meta property="og:title" content="Vocational Training Sacramento | American Institute of Trades" />
        <meta property="og:description" content="Sacramento's premier vocational training center. Hands-on trade school programs with job placement assistance." />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/vocational-training-sacramento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vocational Training in Sacramento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Build a rewarding career through hands-on vocational training at American Institute of Trades. 
              Sacramento's trusted trade school for skilled trades education.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8">
                Explore Programs
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Vocational Training?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Faster Start</h3>
                <p className="text-muted-foreground">Enter the workforce in months, not years</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Lower Cost</h3>
                <p className="text-muted-foreground">Fraction of the cost of 4-year college</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <Building className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Hands-On</h3>
                <p className="text-muted-foreground">Learn by doing, not just reading</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Job Ready</h3>
                <p className="text-muted-foreground">Graduate with employable skills</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Sacramento Vocational Training Programs</h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">HVAC Technician Training</h3>
              <p className="text-muted-foreground mb-6">
                Our flagship vocational program prepares you for a career in heating, ventilation, and air conditioning. 
                Learn installation, maintenance, and repair of HVAC systems.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>EPA 608 Certification included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>OSHA safety training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Hands-on lab experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Job placement assistance</span>
                </div>
              </div>
              <Link to="/programs/hvac-technician">
                <Button>Learn More About HVAC Training</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Vocational Training vs. Traditional College</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4"></th>
                    <th className="text-left py-4 px-4 font-semibold">Vocational Training</th>
                    <th className="text-left py-4 px-4 font-semibold">4-Year College</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Time to Complete</td>
                    <td className="py-4 px-4 text-primary">6-12 months</td>
                    <td className="py-4 px-4 text-muted-foreground">4+ years</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Average Cost</td>
                    <td className="py-4 px-4 text-primary">$5,000-$15,000</td>
                    <td className="py-4 px-4 text-muted-foreground">$100,000+</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Learning Style</td>
                    <td className="py-4 px-4 text-primary">Hands-on practical</td>
                    <td className="py-4 px-4 text-muted-foreground">Lecture-based</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Job Readiness</td>
                    <td className="py-4 px-4 text-primary">Immediate</td>
                    <td className="py-4 px-4 text-muted-foreground">May need additional training</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Start Your Vocational Training in Sacramento</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join American Institute of Trades and begin your path to a skilled trades career. 
              Financial aid available for qualifying students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">Apply Now</Button>
              </Link>
              <Link to="/financial-aid">
                <Button size="lg" variant="outline" className="text-lg px-8">Financial Aid Info</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default VocationalTraining;
