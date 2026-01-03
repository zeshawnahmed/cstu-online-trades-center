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
      question: "I can't afford it right now, what are my options?",
      answer: (
        <>
          We get it, money is tight. That's why we offer a tuition payment plan to break the full program cost $2500 into 3 monthly payments of $833.33. Please visit our{" "}
          <Link to="/financial-aid" className="text-primary hover:text-primary/80 underline font-medium">
            Financial Aid page
          </Link>{" "}
          for all available options.
        </>
      )
    },
    {
      question: "Are you guys legit?",
      answer: "Our institution is in compliance with the California Bureau of Post Secondary Education and as applicable programs are board-approved."
    },
    {
      question: "I didn't get my email with next steps after submitting contact form?",
      answer: "Please check your spam or junk folder as important program emails may end up there."
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
            "name": "I can't afford it right now, what are my options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We get it, money is tight. That's why we offer a tuition payment plan to break the full program cost $2500 into 3 monthly payments of $833.33. Please visit our Financial Aid page for all available options."
            }
          },
          {
            "@type": "Question",
            "name": "Are you guys legit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our institution is in compliance with the California Bureau of Post Secondary Education and as applicable programs are board-approved."
            }
          },
          {
            "@type": "Question",
            "name": "I didn't get my email with next steps after submitting contact form?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Please check your spam or junk folder as important program emails may end up there."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.americanskilledtradeuniversity.edu/faq",
        "name": "FAQ | Frequently Asked Questions | American Institute of Trades Sacramento",
        "description": "Frequently asked questions about HVAC training, tuition payment options, and job search support at American Institute of Trades in Sacramento, California.",
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
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
              Our admissions team is here to help. Contact us for personalized answers about 
              our programs.
            </p>
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
