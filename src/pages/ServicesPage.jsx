import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { HardHat, DraftingCompass, Lightbulb, CheckSquare, Wrench } from 'lucide-react';

    const services = [
      {
        icon: <HardHat className="w-12 h-12 text-primary-blue mb-4" />,
        title: "Gerenciamento de Obras",
        description: "Coordenação completa de todas as etapas da construção, garantindo prazos, custos e qualidade.",
      },
      {
        icon: <DraftingCompass className="w-12 h-12 text-green-400 mb-4" />,
        title: "Projetos Estruturais",
        description: "Desenvolvimento de projetos estruturais seguros, eficientes e otimizados para diversos tipos de edificações.",
      },
      {
        icon: <Lightbulb className="w-12 h-12 text-accent-gold mb-4" />,
        title: "Consultoria Técnica",
        description: "Análise e pareceres técnicos especializados para otimizar projetos e solucionar desafios de engenharia.",
      },
      {
        icon: <CheckSquare className="w-12 h-12 text-purple-400 mb-4" />,
        title: "Laudos e Perícias",
        description: "Elaboração de laudos técnicos e perícias de engenharia com precisão e conformidade normativa.",
      },
      {
        icon: <Wrench className="w-12 h-12 text-red-400 mb-4" />,
        title: "Manutenção Predial",
        description: "Planejamento e execução de serviços de manutenção preventiva e corretiva para edificações.",
      },
    ];

    const ServicesPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <section className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-extrabold mb-6 text-primary-blue"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nossos Serviços
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Oferecemos uma gama completa de soluções de engenharia para atender às suas necessidades.
            </motion.p>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card/80 p-8 rounded-xl shadow-xl hover:shadow-primary-blue/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center glassmorphism-service-card"
              >
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow font-sans">{service.description}</p>
                <Button variant="outline" className="mt-auto border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-primary-foreground transition-colors duration-300 font-sans">
                  Solicitar Orçamento
                </Button>
              </motion.div>
            ))}
          </div>
          <style jsx>{`
            .glassmorphism-service-card {
              background: hsla(var(--card-rgb) / 0.7); 
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              border: 1px solid hsla(var(--primary-blue-rgb) / 0.2); 
            }
            @supports not (backdrop-filter: blur(8px)) {
              .glassmorphism-service-card {
                background: hsl(var(--card));
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default ServicesPage;