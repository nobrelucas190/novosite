import React from 'react';
    import { motion } from 'framer-motion';
    import { Users, Target, Eye, Zap, ShieldCheck } from 'lucide-react';

    const AboutPage = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

      const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };

      const values = [
        { icon: <Target className="w-8 h-8 text-primary-blue" />, title: "Missão", text: "Fornecer soluções de engenharia inovadoras e de alta qualidade, superando as expectativas dos nossos clientes e contribuindo para o desenvolvimento sustentável." },
        { icon: <Eye className="w-8 h-8 text-green-400" />, title: "Visão", text: "Ser referência em excelência e inovação no setor de engenharia, reconhecida pela confiabilidade e pelo impacto positivo de nossos projetos." },
        { icon: <Zap className="w-8 h-8 text-accent-gold" />, title: "Valores", text: "Compromisso, Ética, Inovação, Qualidade, Sustentabilidade e Foco no Cliente." },
      ];

      const differentials = [
        "Equipe altamente qualificada e experiente.",
        "Uso de tecnologias de ponta e metodologias ágeis.",
        "Foco na satisfação total do cliente.",
        "Soluções personalizadas para cada projeto.",
        "Compromisso com prazos e orçamentos.",
        "Abordagem sustentável em todos os empreendimentos."
      ];

      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="space-y-16 py-12"
        >
          <section className="text-center">
            <motion.h1 
              className="text-5xl font-extrabold mb-6 text-primary-blue"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre a Nobreeng
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça nossa trajetória, nossos valores e o que nos move a entregar o melhor em engenharia.
            </motion.p>
          </section>

          <motion.section variants={sectionVariants} className="bg-card/80 p-8 md:p-12 rounded-xl shadow-xl glassmorphism-card">
            <h2 className="text-3xl font-bold mb-6 text-primary-blue flex items-center">
              <Users className="w-8 h-8 mr-3" />
              Nossa História
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 font-sans">
              Fundada com a paixão pela engenharia e o desejo de inovar, a Nobreeng nasceu do sonho de transformar desafios complexos em soluções eficientes e sustentáveis. Ao longo dos anos, construímos uma reputação sólida baseada na confiança, na expertise técnica e no compromisso com resultados excepcionais.
            </p>
            <p className="text-gray-300 leading-relaxed font-sans">
              Nossa jornada é marcada por projetos bem-sucedidos e parcerias duradouras, sempre buscando a vanguarda tecnológica e as melhores práticas do mercado para atender às necessidades específicas de cada cliente.
            </p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className="bg-card/80 p-6 rounded-lg shadow-lg hover:shadow-primary-blue/20 transition-shadow duration-300 glassmorphism-card"
                >
                  <div className="flex items-center mb-4">
                    {value.icon}
                    <h3 className="text-2xl font-semibold ml-3 text-gray-100">{value.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-sans">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={sectionVariants} className="bg-card/80 p-8 md:p-12 rounded-xl shadow-xl glassmorphism-card">
            <h2 className="text-3xl font-bold mb-8 text-green-400 flex items-center">
              <Zap className="w-8 h-8 mr-3" />
              Nossos Diferenciais e Credibilidade
            </h2>
            <ul className="space-y-3 grid md:grid-cols-2 gap-x-8 gap-y-3">
              {differentials.map((diff, index) => (
                <motion.li 
                  key={index} 
                  custom={index}
                  variants={itemVariants}
                  className="flex items-start text-gray-300 font-sans"
                >
                  <ShieldCheck className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{diff}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
          <style jsx>{`
            .glassmorphism-card {
              background: hsla(var(--card-rgb) / 0.6);
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
              border: 1px solid hsla(var(--border-rgb) / 0.1);
            }
             @supports not (backdrop-filter: blur(8px)) {
              .glassmorphism-card {
                background: hsl(var(--card));
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default AboutPage;