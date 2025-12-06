import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const HVACApprenticeship = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": "https://www.americanskilledtradeuniversity.edu/hvac-apprenticeship-sacramento#course",
        "name": "HVAC Apprenticeship Program Sacramento",
        "description": "HVAC apprenticeship and training program in Sacramento, California. Hands-on HVAC technician training with job placement assistance and industry certification.",
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
        "educationalCredentialAwarded": "HVAC Technician Certificate",
        "occupationalCategory": ["49-9021.00", "HVAC Technician", "HVAC Installer"],
        "timeToComplete": "P6M",
        "programPrerequisites": "High School Diploma or GED",
        "offers": {
          "@type": "Offer",
          "category": "HVAC Apprenticeship Training",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an HVAC apprenticeship?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An HVAC apprenticeship combines classroom education with hands-on training under experienced technicians. At American Institute of Trades in Sacramento, our program provides comprehensive HVAC training with real-world experience."
            }
          },
          {
            "@type": "Question",
            "name": "How do I become an HVAC apprentice in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To become an HVAC apprentice in Sacramento, enroll at American Institute of Trades. You'll need a high school diploma or GED. Our program includes hands-on training, EPA 608 certification, and job placement assistance."
            }
          },
          {
            "@type": "Question",
            "name": "How long is HVAC apprenticeship training in Sacramento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our HVAC training program in Sacramento can be completed in as few as 6 months. This accelerated timeline gets you job-ready faster than traditional 4-year apprenticeships."
            }
          },
          {
            "@type": "Question",
            "name": "Do HVAC apprentices get paid during training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our program focuses on getting you trained and certified quickly. Financial aid is available for qualifying students. After graduation, entry-level HVAC technicians in Sacramento earn competitive wages."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/hvac-apprenticeship-sacramento",
        "name": "HVAC Apprenticeship Sacramento | HVAC Training Program | AIT",
        "description": "Start your HVAC apprenticeship in Sacramento at American Institute of Trades. Hands-on training, EPA certification, and job placement assistance. Enroll today!",
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
              "name": "HVAC Apprenticeship Sacramento",
              "item": "https://www.americanskilledtradeuniversity.edu/hvac-apprenticeship-sacramento"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>HVAC Apprenticeship Sacramento | HVAC Training Program | American Institute of Trades</title>
        <meta name="description" content="Start your HVAC apprenticeship in Sacramento at American Institute of Trades. Hands-on HVAC technician training with EPA certification and job placement assistance. Apply now!" />
        <meta name="keywords" content="HVAC apprenticeship Sacramento, HVAC apprentice program Sacramento, HVAC training Sacramento, become HVAC technician Sacramento, HVAC career training, HVAC apprentice jobs Sacramento, heating and cooling apprenticeship, HVAC trade school Sacramento, HVAC technician program Sacramento, learn HVAC Sacramento" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/hvac-apprenticeship-sacramento" />
        <meta property="og:title" content="HVAC Apprenticeship Sacramento | American Institute of Trades" />
        <meta property="og:description" content="Start your HVAC apprenticeship in Sacramento. Hands-on training, EPA certification, and job placement assistance." />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/hvac-apprenticeship-sacramento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              HVAC Apprenticeship Program in Sacramento
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Launch your HVAC career with hands-on apprenticeship training at American Institute of Trades. 
              Get certified and job-ready in Sacramento's growing HVAC industry.
            </p>
            <Link to="/apply">
              <Button size="lg" className="text-lg px-8">
                Start Your Apprenticeship
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose HVAC as a Career?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Growing Demand</h3>
                <p className="text-muted-foreground">
                  HVAC jobs are projected to grow 6% through 2032, faster than average
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <Briefcase className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Job Security</h3>
                <p className="text-muted-foreground">
                  Every building needs HVAC - essential service that can't be outsourced
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card text-center">
                <GraduationCap className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">No College Debt</h3>
                <p className="text-muted-foreground">
                  Start earning faster without years of expensive university tuition
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Sacramento HVAC Apprenticeship Program Includes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Hands-On Lab Training</h3>
                  <p className="text-muted-foreground">Work with real HVAC equipment in our Sacramento facility</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">EPA 608 Certification Prep</h3>
                  <p className="text-muted-foreground">Complete refrigerant handling certification included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">OSHA Safety Training</h3>
                  <p className="text-muted-foreground">Industry-standard safety certification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Job Placement Assistance</h3>
                  <p className="text-muted-foreground">Connect with Sacramento HVAC employers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Electrical Fundamentals</h3>
                  <p className="text-muted-foreground">Essential electrical skills for HVAC systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Field Experience</h3>
                  <p className="text-muted-foreground">Real-world installation and repair experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Begin Your HVAC Apprenticeship in Sacramento</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step toward a rewarding career in HVAC. 
              Apply to American Institute of Trades today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" className="text-lg px-8">Apply Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8">Request Information</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HVACApprenticeship;
