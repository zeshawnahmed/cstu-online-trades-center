import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, DollarSign } from "lucide-react";

const EPA608Certification = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.americanskilledtradeuniversity.edu/epa-608-certification-sacramento#course",
        "name": "EPA 608 Certification Training Sacramento",
        "description": "Comprehensive EPA 608 certification training program in Sacramento, California. Prepare for all four EPA 608 certification types: Core, Type I, Type II, and Universal.",
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
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "courseWorkload": "PT40H",
          "instructor": {
            "@type": "Person",
            "name": "Certified HVAC Instructors"
          }
        },
        "occupationalCredentialAwarded": {
          "@type": "EducationalOccupationalCredential",
          "name": "EPA Section 608 Technician Certification",
          "credentialCategory": "Professional Certification"
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        },
        "inLanguage": "en-US",
        "offers": {
          "@type": "Offer",
          "category": "EPA 608 Certification",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is EPA 608 Certification?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EPA 608 Certification is required by the Environmental Protection Agency for technicians who work with refrigerants. It ensures proper handling of refrigerants to protect the ozone layer and environment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does EPA 608 certification training take in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At American Institute of Trades in Sacramento, EPA 608 certification training is included in our comprehensive HVAC program. The certification exam preparation typically takes 40 hours of focused training."
            }
          },
          {
            "@type": "Question",
            "name": "What are the types of EPA 608 Certification?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There are four types: Type I (small appliances), Type II (high-pressure equipment), Type III (low-pressure equipment), and Universal (all types combined). Our Sacramento training covers all four types."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I get EPA 608 certified in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "American Institute of Trades offers EPA 608 certification training and testing in Sacramento, California. Our program prepares you for the Universal certification exam."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/epa-608-certification-sacramento",
        "name": "EPA 608 Certification Sacramento | HVAC Refrigerant Training | AIT",
        "description": "Get EPA 608 certified in Sacramento at American Institute of Trades. Complete refrigerant handling certification training with hands-on preparation for all EPA 608 types.",
        "isPartOf": {
          "@id": "https://www.americanskilledtradeuniversity.edu/#website"
        },
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
              "name": "EPA 608 Certification Sacramento",
              "item": "https://www.americanskilledtradeuniversity.edu/epa-608-certification-sacramento"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>EPA 608 Certification Sacramento | Refrigerant Training | American Institute of Trades</title>
        <meta name="description" content="Get EPA 608 certified in Sacramento at American Institute of Trades. Complete refrigerant handling certification training. Type I, II, III & Universal certification prep. Enroll now!" />
        <meta name="keywords" content="EPA 608 certification Sacramento, EPA 608 training Sacramento, refrigerant certification Sacramento, HVAC certification Sacramento, EPA certification classes Sacramento, Universal EPA certification, Type I EPA certification, Type II EPA certification, refrigerant handling training, Sacramento EPA 608 test, HVAC refrigerant license Sacramento" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/epa-608-certification-sacramento" />
        <meta property="og:title" content="EPA 608 Certification Sacramento | American Institute of Trades" />
        <meta property="og:description" content="Get EPA 608 certified in Sacramento. Complete refrigerant handling training for HVAC technicians. Enroll at AIT today!" />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/epa-608-certification-sacramento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              EPA 608 Certification Training in Sacramento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Get your EPA Section 608 Technician Certification at American Institute of Trades. 
              Our comprehensive training prepares you for all certification types.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8">
                Enroll Now
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">What is EPA 608 Certification?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              EPA 608 Certification is federally required for any technician who works with refrigerants. 
              The Environmental Protection Agency mandates this certification to ensure proper handling 
              of refrigerants and protect our environment.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="p-6 rounded-lg border border-border bg-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Type I</h3>
                <p className="text-muted-foreground">Small appliances containing 5 lbs or less of refrigerant</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Type II</h3>
                <p className="text-muted-foreground">High-pressure equipment like residential AC systems</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Type III</h3>
                <p className="text-muted-foreground">Low-pressure equipment like chillers</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Universal</h3>
                <p className="text-muted-foreground">All equipment types - most comprehensive certification</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Get EPA 608 Certified in Sacramento at AIT?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Training</h3>
                    <p className="text-muted-foreground">Full preparation for all four EPA 608 certification types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Hands-On Experience</h3>
                    <p className="text-muted-foreground">Practice with real refrigerant handling equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Expert Instructors</h3>
                    <p className="text-muted-foreground">Learn from certified HVAC professionals with industry experience</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Day and evening classes available in Sacramento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Affordable Tuition</h3>
                    <p className="text-muted-foreground">Financial aid available for qualifying students</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">High Pass Rate</h3>
                    <p className="text-muted-foreground">Our students consistently achieve high EPA 608 exam pass rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Start Your HVAC Career Today</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join American Institute of Trades in Sacramento and get your EPA 608 certification 
              as part of our comprehensive HVAC training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">Apply Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default EPA608Certification;
