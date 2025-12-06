import { Helmet } from "react-helmet";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is the best trade school in Sacramento?",
      answer: "American Institute of Trades (AIT) is Sacramento's premier trade school for HVAC training. We offer comprehensive hands-on training, EPA 608 certification, and job placement assistance. Our focused curriculum prepares students for immediate employment in the HVAC industry."
    },
    {
      question: "How long does HVAC training take in Sacramento?",
      answer: "Our HVAC technician training program in Sacramento can be completed in approximately 6 months. This accelerated timeline includes classroom instruction, hands-on lab training, EPA 608 certification preparation, and OSHA safety training."
    },
    {
      question: "How much does HVAC school cost in Sacramento?",
      answer: "American Institute of Trades offers affordable HVAC training in Sacramento. Our tuition is significantly less than traditional 4-year colleges. Financial aid is available for qualifying students. Contact us for current tuition information and payment plans."
    },
    {
      question: "Do I need experience to enroll in HVAC training?",
      answer: "No prior experience is required to enroll in our Sacramento HVAC program. You only need a high school diploma or GED. Our program starts with fundamentals and progressively builds your skills through hands-on training."
    },
    {
      question: "What certifications will I earn at AIT Sacramento?",
      answer: "Our HVAC training program includes preparation for EPA Section 608 Technician Certification (required to handle refrigerants), OSHA safety certification, and our HVAC Technician Certificate. These credentials prepare you for immediate employment."
    },
    {
      question: "Does AIT offer job placement assistance in Sacramento?",
      answer: "Yes, American Institute of Trades provides job placement assistance for all graduates. We connect students with local Sacramento HVAC employers, help with resume preparation, and provide interview coaching to launch your career."
    },
    {
      question: "What is EPA 608 certification?",
      answer: "EPA 608 certification is federally required for technicians who work with refrigerants. It ensures proper handling of refrigerants to protect the environment. Our Sacramento training includes full preparation for all four certification types: Type I, II, III, and Universal."
    },
    {
      question: "How much do HVAC technicians make in Sacramento?",
      answer: "HVAC technicians in Sacramento earn competitive wages. Entry-level positions typically start at $40,000-$50,000 annually. Experienced technicians can earn $60,000-$85,000 or more. Sacramento's hot climate creates year-round demand for skilled HVAC professionals."
    },
    {
      question: "Is there financial aid available for trade school in Sacramento?",
      answer: "Yes, financial aid is available for qualifying students at American Institute of Trades. We offer various payment options and can help you explore funding opportunities. Contact our admissions office to discuss your financial aid options."
    },
    {
      question: "What will I learn in HVAC training?",
      answer: "Our comprehensive HVAC curriculum covers heating systems, air conditioning, ventilation, refrigeration, electrical fundamentals, system diagnostics, installation techniques, preventive maintenance, and customer service skills. You'll work with real equipment in our hands-on labs."
    },
    {
      question: "Are HVAC jobs in demand in Sacramento?",
      answer: "Yes, HVAC jobs are in high demand in Sacramento. The Bureau of Labor Statistics projects 6% job growth for HVAC technicians through 2032. Sacramento's hot summers (regularly exceeding 100°F) and growing construction market create consistent demand for skilled technicians."
    },
    {
      question: "Can I work while attending HVAC school in Sacramento?",
      answer: "Yes, we offer flexible scheduling options to accommodate working students. Many of our Sacramento students balance work and training. Contact us to discuss class schedules that fit your lifestyle."
    },
    {
      question: "What's the difference between HVAC school and an apprenticeship?",
      answer: "HVAC school at AIT provides accelerated, structured training you complete in months. Traditional apprenticeships can take 3-5 years. Our program combines classroom learning with hands-on experience, getting you job-ready faster while earning industry certifications."
    },
    {
      question: "Where is American Institute of Trades located?",
      answer: "American Institute of Trades is located in Sacramento, California. Our facility features modern HVAC training labs with industry-standard equipment. Contact us for our exact address and to schedule a campus tour."
    },
    {
      question: "Is HVAC a good career choice?",
      answer: "HVAC is an excellent career choice offering job security, good pay, and growth potential. Unlike many jobs, HVAC work cannot be outsourced. Sacramento's climate ensures year-round demand, and experienced technicians can advance to supervisory roles or start their own businesses."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/faq",
        "name": "FAQ | HVAC Training Questions | American Institute of Trades Sacramento",
        "description": "Frequently asked questions about HVAC training, trade school, certifications, and careers at American Institute of Trades in Sacramento, California.",
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
              "name": "FAQ",
              "item": "https://www.americanskilledtradeuniversity.edu/faq"
            }
          ]
        }
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>FAQ | HVAC Training Questions Sacramento | American Institute of Trades</title>
        <meta name="description" content="Get answers to frequently asked questions about HVAC training, trade school costs, certifications, and careers at American Institute of Trades in Sacramento, California." />
        <meta name="keywords" content="HVAC training FAQ, trade school questions Sacramento, HVAC school FAQ, Sacramento trade school FAQ, HVAC certification questions, EPA 608 FAQ, vocational training FAQ, AIT Sacramento FAQ" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/faq" />
        <meta property="og:title" content="FAQ | HVAC Training Questions | American Institute of Trades" />
        <meta property="og:description" content="Answers to common questions about HVAC training, costs, certifications, and careers at AIT Sacramento." />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about HVAC training at American Institute of Trades in Sacramento
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our admissions team is here to help. Contact us for personalized answers about 
              HVAC training at American Institute of Trades in Sacramento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">Contact Us</Button>
              </Link>
              <Link to="/apply">
                <Button size="lg" variant="outline" className="text-lg px-8">Apply Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FAQPage;
