import React from 'react';
    import { motion } from 'framer-motion';
    import { Building, Factory, Home as HomeIcon, Wrench } from 'lucide-react';

    const projects = [
      {
        imageName: "Edifício Comercial Moderno com fachada de vidro espelhado em São Paulo",
        title: "Edifício Comercial Alpha",
        location: "São Paulo, SP",
        type: "Construção Comercial",
        description: "Projeto e construção de um edifício comercial de 10 andares com foco em sustentabilidade e design inovador.",
        icon: <Building className="w-8 h-8 text-primary-blue" />
      },
      {
        imageName: "Interior de um Complexo Industrial Automatizado com robôs em Campinas",
        title: "Complexo Industrial Beta",
        location: "Campinas, SP",
        type: "Engenharia Industrial",
        description: "Modernização e automação de um complexo industrial, resultando em aumento de 25% na produtividade.",
        icon: <Factory className="w-8 h-8 text-green-400" />
      },
      {
        imageName: "Fachada de um Residencial de Alto Padrão com piscina no Rio de Janeiro",
        title: "Residencial Gamma",
        location: "Rio de Janeiro, RJ",
        type: "Construção Residencial",
        description: "Desenvolvimento de um condomínio residencial de alto padrão com infraestrutura completa e áreas de lazer.",
        icon: <HomeIcon className="w-8 h-8 text-accent-gold" />
      },
      {
        imageName: "Trabalhadores realizando Reforma Estrutural em uma Ponte em Belo Horizonte",
        title: "Reforma Ponte Delta",
        location: "Belo Horizonte, MG",
        type: "Infraestrutura",
        description: "Serviço de reforma e reforço estrutural em ponte histórica, garantindo segurança e durabilidade.",
        icon: <Wrench className="w-8 h-8 text-purple-400" />
      },
    ];

    const ProjectsPage = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            duration: 0.5
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-12"
        >
          <section className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-extrabold mb-6 text-primary-blue"
              variants={itemVariants}
            >
              Nosso Portfólio de Projetos
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto font-sans"
              variants={itemVariants}
            >
              Confira alguns dos projetos que demonstram nossa expertise e compromisso com a excelência.
            </motion.p>
          </section>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card/80 rounded-xl shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-300 glassmorphism-project-card"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                    alt={project.title}
                   src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-primary-blue text-sm font-sans">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-primary-blue mb-3">
                    {project.icon}
                    <span className="ml-2 font-semibold font-sans">{project.type}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-sans">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <style jsx>{`
            .glassmorphism-project-card {
              background: hsla(var(--card-rgb) / 0.7); 
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid hsla(var(--primary-blue-rgb) / 0.15); 
            }
            @supports not (backdrop-filter: blur(10px)) {
              .glassmorphism-project-card {
                background: hsl(var(--card));
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default ProjectsPage;