import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, DollarSign, Briefcase, MapPin } from "lucide-react";

const HVACCareersSacramento = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Occupation",
        "name": "HVAC Technician",
        "occupationalCategory": "49-9021.00",
        "description": "HVAC technicians install, maintain, and repair heating, ventilation, and air conditioning systems in residential and commercial buildings.",
        "estimatedSalary": {
          "@type": "MonetaryAmountDistribution",
          "name": "HVAC Technician Salary Sacramento",
          "currency": "USD",
          "unitText": "YEAR",
          "percentile10": 40000,
          "percentile25": 48000,
          "median": 58000,
          "percentile75": 72000,
          "percentile90": 85000
        },
        "occupationLocation": {
          "@type": "City",
          "name": "Sacramento",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        },
        "qualifications": "EPA 608 Certification, HVAC Training Certificate",
        "skills": ["HVAC Installation", "Refrigerant Handling", "Electrical Systems", "Troubleshooting", "Customer Service"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do HVAC technicians make in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVAC technicians in Sacramento earn between $40,000-$85,000+ annually depending on experience and specialization. Entry-level technicians typically start around $40,000-$50,000, while experienced technicians and specialists can earn $70,000-$85,000 or more."
            }
          },
          {
            "@type": "Question",
            "name": "Are HVAC jobs in demand in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, HVAC jobs are in high demand in Sacramento. With hot summers exceeding 100°F and the growing construction market, skilled HVAC technicians are consistently needed. The Bureau of Labor Statistics projects 6% job growth through 2032."
            }
          },
          {
            "@type": "Question",
            "name": "What HVAC companies are hiring in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many HVAC companies in Sacramento hire trained technicians including residential contractors, commercial HVAC companies, building maintenance firms, and equipment manufacturers. American Institute of Trades provides job placement assistance connecting graduates with local employers."
            }
          },
          {
            "@type": "Question",
            "name": "How do I start an HVAC career in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To start an HVAC career in Sacramento, enroll in training at American Institute of Trades. Complete the HVAC technician program, earn your EPA 608 certification, and use our job placement assistance to connect with Sacramento employers."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/hvac-careers-sacramento",
        "name": "HVAC Careers Sacramento | HVAC Jobs & Salary Guide | AIT",
        "description": "Explore HVAC careers in Sacramento. Salary information, job outlook, and training requirements. Start your HVAC career at American Institute of Trades!",
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
              "name": "HVAC Careers Sacramento",
              "item": "https://www.americanskilledtradeuniversity.edu/hvac-careers-sacramento"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>HVAC Careers Sacramento | HVAC Jobs & Salary Guide | American Institute of Trades</title>
        <meta name="description" content="Explore HVAC careers in Sacramento. Learn about HVAC technician salaries, job demand, and career growth. Start your HVAC career training at American Institute of Trades!" />
        <meta name="keywords" content="HVAC careers Sacramento, HVAC jobs Sacramento, HVAC salary Sacramento, HVAC technician jobs Sacramento, heating and cooling jobs Sacramento, AC technician careers, HVAC employment Sacramento, HVAC job outlook, become HVAC technician Sacramento, HVAC career path" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/hvac-careers-sacramento" />
        <meta property="og:title" content="HVAC Careers Sacramento | American Institute of Trades" />
        <meta property="og:description" content="Explore HVAC careers in Sacramento. Salary info, job demand, and training. Start your career at AIT!" />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/hvac-careers-sacramento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              HVAC Careers in Sacramento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Discover the rewarding career opportunities in HVAC. Sacramento's growing demand for 
              skilled technicians means excellent job prospects and competitive salaries.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8">
                Start Your HVAC Career
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">HVAC Salary in Sacramento</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground mb-2">Entry Level</p>
                <p className="text-3xl font-bold text-foreground">$40,000-$50,000</p>
                <p className="text-sm text-muted-foreground mt-2">Starting salary for new technicians</p>
              </div>
              <div className="p-6 rounded-lg border border-primary bg-primary/5 text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground mb-2">Median Salary</p>
                <p className="text-3xl font-bold text-primary">$58,000</p>
                <p className="text-sm text-muted-foreground mt-2">Average HVAC technician salary</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground mb-2">Experienced</p>
                <p className="text-3xl font-bold text-foreground">$72,000-$85,000+</p>
                <p className="text-sm text-muted-foreground mt-2">Senior technicians & specialists</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why HVAC Careers Are Booming in Sacramento</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growing Demand</h3>
                    <p className="text-muted-foreground">
                      6% job growth projected through 2032. Sacramento's construction boom and aging 
                      workforce create ongoing opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Climate Drives Need</h3>
                    <p className="text-muted-foreground">
                      Sacramento summers regularly exceed 100°F. Every building needs reliable AC, 
                      creating year-round work opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Job Security</h3>
                    <p className="text-muted-foreground">
                      HVAC work cannot be outsourced or automated. Buildings always need service, 
                      providing stable long-term employment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Career Advancement</h3>
                    <p className="text-muted-foreground">
                      Paths to supervisory roles, specialization, or starting your own HVAC business. 
                      Unlimited earning potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">HVAC Career Paths in Sacramento</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Residential HVAC Technician</h3>
                <p className="text-muted-foreground mb-4">Service and install home heating and cooling systems</p>
                <p className="text-primary font-medium">$45,000 - $65,000</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Commercial HVAC Technician</h3>
                <p className="text-muted-foreground mb-4">Work on larger commercial building systems</p>
                <p className="text-primary font-medium">$55,000 - $80,000</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">HVAC Service Manager</h3>
                <p className="text-muted-foreground mb-4">Lead service teams and manage operations</p>
                <p className="text-primary font-medium">$65,000 - $90,000</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">HVAC Sales Engineer</h3>
                <p className="text-muted-foreground mb-4">Combine technical knowledge with sales</p>
                <p className="text-primary font-medium">$60,000 - $100,000+</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">Refrigeration Specialist</h3>
                <p className="text-muted-foreground mb-4">Focus on commercial refrigeration systems</p>
                <p className="text-primary font-medium">$55,000 - $85,000</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-2">HVAC Business Owner</h3>
                <p className="text-muted-foreground mb-4">Start your own HVAC contracting company</p>
                <p className="text-primary font-medium">$100,000+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Begin Your HVAC Career in Sacramento</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              American Institute of Trades provides the training you need to start your HVAC career. 
              Join Sacramento's in-demand workforce today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">Apply Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">Get More Info</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HVACCareersSacramento;
