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
      question: "Do you offer financial aid?",
      answer: (
        <>
          We do not offer FAFSA. We offer a flexible payment plan of three payments. Students may also use a private student loan. See our{" "}
          <Link to="/financial-aid" className="text-primary hover:text-primary/80 underline font-medium">
            Financial Aid page
          </Link>{" "}
          for details.
        </>
      )
    },
    {
      question: "Is the program online?",
      answer: "Hybrid. The majority is online, with a weekly skills lab near downtown Sacramento."
    },
    {
      question: "Which certification will I prepare to earn?",
      answer: "The CACMA by the CCBMA — the premier Medical Assistant credential in California."
    },
    {
      question: "What are the next steps if I'm interested?",
      answer: "Fill out the contact form on our website. An admissions rep will be in touch."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you offer financial aid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We do not offer FAFSA. We offer a flexible payment plan of three payments. Students may also use a private student loan. See our Financial Aid page for details."
            }
          },
          {
            "@type": "Question",
            "name": "Is the program online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hybrid. The majority is online, with a weekly skills lab near downtown Sacramento."
            }
          },
          {
            "@type": "Question",
            "name": "Which certification will I prepare to earn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The CACMA by the CCBMA — the premier Medical Assistant credential in California."
            }
          },
          {
            "@type": "Question",
            "name": "What are the next steps if I'm interested?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fill out the contact form on our website. An admissions rep will be in touch."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/faq",
        "name": "FAQ | Medical Assistant Program | American Institute of Trades Sacramento",
        "description": "Frequently asked questions about the 5-week Medical Assistant program, tuition payment options, and CCBMA CACMA exam prep at AIT Sacramento.",
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
        <title>FAQ | Frequently Asked Questions | American Institute of Trades Sacramento</title>
        <meta name="description" content="Get answers to frequently asked questions about HVAC training, tuition payment options, and job search support at American Institute of Trades in Sacramento, California." />
        <meta name="keywords" content="HVAC training FAQ, trade school questions Sacramento, tuition payment plan, job search support, AIT Sacramento FAQ" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/faq" />
        <meta property="og:title" content="FAQ | Frequently Asked Questions | American Institute of Trades" />
        <meta property="og:description" content="Answers to common questions about HVAC training, tuition, and careers at AIT Sacramento." />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center px-2">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get answers to common questions about our programs
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16 px-3 md:px-4">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 md:px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4 md:py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-10 md:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">Still Have Questions?</h2>
            <Link to="/contact">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">Contact Us</Button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default FAQPage;
