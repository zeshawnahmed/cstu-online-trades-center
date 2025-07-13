
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ResearchHub = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      category: 'HVAC',
      title: "Cooling Without Refrigerants? It's Happening Now",
      content: `Traditional air conditioners rely on refrigerants like Freon or R-410A—chemicals that, if leaked, contribute to global warming. But what if you could cool a building without refrigerants at all?

That's the promise of solid-state cooling. Instead of using compressors and gases, these systems rely on advanced materials—like magnetocaloric or electrocaloric compounds—that heat up or cool down when exposed to magnetic or electric fields. No moving parts. No leaks. Just clean, compact, and whisper-quiet cooling.

Researchers at MIT and Oak Ridge National Laboratory are leading the charge. Meanwhile, startups like Blue Frontier are piloting early-stage systems that promise to reduce HVAC energy use by 60% or more.

If you've ever wished your A/C was cheaper to run, more sustainable, and less prone to breakdowns—this is the tech to watch.`
    },
    {
      id: 2,
      category: 'Trucking',
      title: 'Hydrogen Semi-Trucks Are Rolling Out in California',
      content: `Electric trucks have gotten most of the headlines lately, but hydrogen fuel cell trucks are quickly becoming the heavyweight contender—especially for long-haul freight.

Companies like Nikola, Hyundai, and Toyota are building and testing hydrogen-powered big rigs capable of traveling 500 to 750 miles on a single tank. Even better? They can refuel in about 15 minutes, unlike electric trucks which can take hours to charge.

Hydrogen trucks still use electric motors—but they generate their own electricity onboard using fuel cells. The only emission? Water vapor. That makes them perfect for states like California, which is rapidly building out a statewide hydrogen fueling network.

For fleet operators, hydrogen offers the range and refueling speed of diesel—with none of the emissions or noise.`
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-navy-600 to-navy-800">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {language === 'en' ? 'Research Hub' : 'Centro de Investigación'}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                {language === 'en' 
                  ? 'Stay updated with the latest breakthroughs and innovations'
                  : 'Mantente actualizado con los últimos avances e innovaciones'}
              </p>
              
              {/* Innovation Commitment Paragraph */}
              <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <p className="text-lg opacity-95 leading-relaxed">
                  {language === 'en'
                    ? 'At ASTU, we are committed to innovation and preparing our students with the most cutting-edge knowledge in their field. Our Research Hub was launched to keep you informed about the latest technological breakthroughs and industry developments that are shaping the future of skilled trades. Stay ahead of the curve with insights that matter to your career.'
                    : 'En ASTU, estamos comprometidos con la innovación y preparar a nuestros estudiantes con el conocimiento más vanguardista en su campo. Nuestro Centro de Investigación fue lanzado para mantenerlo informado sobre los últimos avances tecnológicos y desarrollos de la industria que están dando forma al futuro de los oficios especializados. Manténgase a la vanguardia con conocimientos que importan para su carrera.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge 
                        variant={article.category === 'HVAC' ? 'default' : 'secondary'}
                        className="flex items-center gap-1"
                      >
                        {article.category === 'HVAC' ? (
                          <Wrench className="h-3 w-3" />
                        ) : (
                          <Truck className="h-3 w-3" />
                        )}
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-navy-700 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="prose prose-lg max-w-none text-navy-600/90 leading-relaxed">
                      {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-navy-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Stay Updated' : 'Mantente Actualizado'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {language === 'en' 
                ? 'Get the latest industry insights delivered to your inbox'
                : 'Recibe las últimas perspectivas de la industria en tu bandeja de entrada'}
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder={language === 'en' ? 'Enter your email' : 'Ingresa tu email'}
                className="flex-1 px-4 py-2 rounded-md text-navy-900"
              />
              <button className="px-6 py-2 bg-gold-400 text-navy-900 rounded-md hover:bg-gold-300 transition-colors font-medium">
                {language === 'en' ? 'Subscribe' : 'Suscribirse'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResearchHub;
