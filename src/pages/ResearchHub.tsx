
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, TrendingUp, Wrench, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ResearchHub = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      category: 'HVAC',
      title: language === 'en' ? 'Revolutionary Heat Pump Technology Achieves 95% Efficiency' : 'Tecnología Revolucionaria de Bomba de Calor Alcanza 95% de Eficiencia',
      excerpt: language === 'en' 
        ? 'New variable-speed compressor technology is transforming residential and commercial heating systems with unprecedented efficiency ratings.'
        : 'La nueva tecnología de compresor de velocidad variable está transformando los sistemas de calefacción residenciales y comerciales con niveles de eficiencia sin precedentes.',
      date: '2024-01-15',
      readTime: '5 min',
      trending: true,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      category: 'Trucking',
      title: language === 'en' ? 'Electric Semi-Trucks Reach 500-Mile Range Milestone' : 'Camiones Eléctricos Alcanzan Hito de 500 Millas de Alcance',
      excerpt: language === 'en'
        ? 'Major breakthrough in battery technology enables long-haul electric trucking, reducing emissions and operational costs significantly.'
        : 'Gran avance en tecnología de baterías permite el transporte eléctrico de larga distancia, reduciendo significativamente las emisiones y costos operativos.',
      date: '2024-01-12',
      readTime: '7 min',
      trending: true,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      category: 'HVAC',
      title: language === 'en' ? 'Smart HVAC Systems Reduce Energy Costs by 40%' : 'Sistemas HVAC Inteligentes Reducen Costos de Energía en 40%',
      excerpt: language === 'en'
        ? 'AI-powered climate control systems are learning building patterns to optimize heating and cooling automatically.'
        : 'Los sistemas de control climático impulsados por IA están aprendiendo patrones de edificios para optimizar automáticamente la calefacción y refrigeración.',
      date: '2024-01-10',
      readTime: '4 min',
      trending: false,
      image: '/placeholder.svg'
    },
    {
      id: 4,
      category: 'Trucking',
      title: language === 'en' ? 'Autonomous Trucking Pilots Show 98% Safety Improvement' : 'Pilotos de Camiones Autónomos Muestran 98% de Mejora en Seguridad',
      excerpt: language === 'en'
        ? 'Latest autonomous driving technology demonstrates remarkable safety improvements in controlled highway environments.'
        : 'La última tecnología de conducción autónoma demuestra mejoras notables de seguridad en entornos controlados de autopistas.',
      date: '2024-01-08',
      readTime: '6 min',
      trending: false,
      image: '/placeholder.svg'
    },
    {
      id: 5,
      category: 'HVAC',
      title: language === 'en' ? 'New Refrigerant R-454B Approved for Commercial Use' : 'Nuevo Refrigerante R-454B Aprobado para Uso Comercial',
      excerpt: language === 'en'
        ? 'EPA approves new low-GWP refrigerant that provides better performance while meeting environmental regulations.'
        : 'EPA aprueba nuevo refrigerante de bajo GWP que proporciona mejor rendimiento mientras cumple con las regulaciones ambientales.',
      date: '2024-01-05',
      readTime: '3 min',
      trending: false,
      image: '/placeholder.svg'
    },
    {
      id: 6,
      category: 'Trucking',
      title: language === 'en' ? 'Hydrogen Fuel Cell Trucks Enter Mass Production' : 'Camiones de Celda de Combustible de Hidrógeno Entran en Producción Masiva',
      excerpt: language === 'en'
        ? 'Major manufacturers announce plans for large-scale production of hydrogen-powered commercial vehicles.'
        : 'Los principales fabricantes anuncian planes para la producción a gran escala de vehículos comerciales propulsados por hidrógeno.',
      date: '2024-01-03',
      readTime: '5 min',
      trending: false,
      image: '/placeholder.svg'
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
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Stay updated with the latest breakthroughs and innovations in HVAC technology and commercial trucking industry'
                  : 'Mantente actualizado con los últimos avances e innovaciones en tecnología HVAC y la industria del transporte comercial'}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="default" className="px-6 py-2 text-sm">
                {language === 'en' ? 'All Articles' : 'Todos los Artículos'}
              </Badge>
              <Badge variant="outline" className="px-6 py-2 text-sm hover:bg-navy-50 cursor-pointer">
                <Wrench className="h-4 w-4 mr-2" />
                HVAC
              </Badge>
              <Badge variant="outline" className="px-6 py-2 text-sm hover:bg-navy-50 cursor-pointer">
                <Truck className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Trucking' : 'Transporte'}
              </Badge>
              <Badge variant="outline" className="px-6 py-2 text-sm hover:bg-navy-50 cursor-pointer">
                <TrendingUp className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Trending' : 'Tendencia'}
              </Badge>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
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
                    {article.trending && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="destructive" className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {language === 'en' ? 'Trending' : 'Tendencia'}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-navy-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
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
