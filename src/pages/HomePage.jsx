import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Zap, ShieldCheck, Lightbulb } from 'lucide-react';

    const HomePage = () => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };

      const featureCards = [
        {
          icon: <Zap className="w-10 h-10 text-primary-blue mb-4" />,
          title: "Soluções Inovadoras",
          description: "Engenharia de ponta para projetos complexos e desafiadores.",
        },
        {
          icon: <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />,
          title: "Qualidade Garantida",
          description: "Compromisso com a excelência e os mais altos padrões de segurança.",
        },
        {
          icon: <Lightbulb className="w-10 h-10 text-accent-gold mb-4" />,
          title: "Consultoria Especializada",
          description: "Orientação técnica e estratégica para otimizar seus empreendimentos.",
        },
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <section className="text-center py-20 rounded-xl bg-gradient-to-tr from-card/50 via-background/70 to-card/50 shadow-2xl overflow-hidden">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-montserrat text-nobreeng-dark-blue uppercase">
                Nobreeng
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto px-4 font-sans">
                Transformando Ideias em Realidade com Engenharia de Excelência.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-primary-blue hover:bg-primary-blue/90 text-primary-foreground font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 font-sans">
                  Saiba Mais <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-primary-foreground font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 font-sans">
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hero-pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M10-2.5v5M20-2.5v5M30-2.5v5M-2.5 10h5M-2.5 20h5M-2.5 30h5M10 37.5v5M20 37.5v5M30 37.5v5M37.5 10h5M37.5 20h5M37.5 30h5" strokeWidth="1" stroke="hsl(var(--primary-blue)/0.5)" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(#hero-pattern)"/></svg>
            </div>
          </section>

          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">
                Nossos Diferenciais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-card/80 p-8 rounded-xl shadow-xl hover:shadow-primary-blue/30 transition-shadow duration-300 flex flex-col items-center text-center glassmorphism-card"
                >
                  {card.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-sans">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-16 text-center">
             <h2 className="text-4xl font-bold mb-6 text-accent-gold">Pronto para começar seu próximo projeto?</h2>
             <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-sans">
               Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar suas ideias em realidade.
             </p>
             <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 font-sans">
               Fale Conosco
             </Button>
          </section>
          <style jsx>{`
            .glassmorphism-card {
              background: hsla(var(--card-rgb) / 0.7);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid hsla(var(--border-rgb) / 0.2);
            }
            @supports not (backdrop-filter: blur(10px)) {
              .glassmorphism-card {
                background: hsl(var(--card));
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default HomePage;