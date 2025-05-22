import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { useToast } from '@/components/ui/use-toast';
    import { Phone, Mail, MapPin, Send, Linkedin, Instagram, Facebook, MessageSquare } from 'lucide-react';

    const ContactPage = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        localStorage.setItem('contactFormSubmission', JSON.stringify(formData));

        toast({
          title: "Mensagem Enviada!",
          description: "Obrigado por entrar em contato. Responderemos em breve.",
          variant: "default",
          className: "bg-card border-primary-blue text-foreground",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      };

      const contactInfo = [
        { icon: <MessageSquare className="w-6 h-6 text-primary-blue" />, text: "(99) 99145-5460 (WhatsApp)", href: "https://wa.me/5599991455460" },
        { icon: <Mail className="w-6 h-6 text-primary-blue" />, text: "lucas.nobre@nobreeng.eng.br", href: "mailto:lucas.nobre@nobreeng.eng.br" },
        { icon: <MapPin className="w-6 h-6 text-primary-blue" />, text: "Avenida Santa Luzia, 1196, Centro, Açailândia-MA" },
      ];

      const socialLinks = [
        { icon: <Linkedin className="w-6 h-6" />, href: "#", name: "LinkedIn" },
        { icon: <Instagram className="w-6 h-6" />, href: "#", name: "Instagram" },
        { icon: <Facebook className="w-6 h-6" />, href: "#", name: "Facebook" },
      ];

      const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };
      
      const inputMotionProps = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
      };


      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="py-12"
        >
          <section className="text-center mb-16">
            <motion.h1 
              className="text-5xl font-extrabold mb-6 text-primary-blue"
              variants={sectionVariants}
            >
              Entre em Contato
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto font-sans"
              variants={sectionVariants}
            >
              Estamos prontos para ouvir sobre seu projeto ou responder suas dúvidas.
            </motion.p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-card/80 p-8 rounded-xl shadow-xl glassmorphism-contact-card"
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-semibold mb-8 text-primary-blue">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div {...inputMotionProps} transition={{ ...inputMotionProps.transition, delay: 0.1 }}>
                  <Label htmlFor="name" className="text-gray-300 font-sans">Nome Completo</Label>
                  <Input type="text" id="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required className="bg-input border-border text-gray-200 placeholder-gray-500 focus:ring-ring focus:border-ring font-sans" />
                </motion.div>
                <motion.div {...inputMotionProps} transition={{ ...inputMotionProps.transition, delay: 0.2 }}>
                  <Label htmlFor="email" className="text-gray-300 font-sans">E-mail</Label>
                  <Input type="email" id="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="bg-input border-border text-gray-200 placeholder-gray-500 focus:ring-ring focus:border-ring font-sans" />
                </motion.div>
                <motion.div {...inputMotionProps} transition={{ ...inputMotionProps.transition, delay: 0.3 }}>
                  <Label htmlFor="phone" className="text-gray-300 font-sans">Telefone (Opcional)</Label>
                  <Input type="tel" id="phone" placeholder="(XX) XXXXX-XXXX" value={formData.phone} onChange={handleChange} className="bg-input border-border text-gray-200 placeholder-gray-500 focus:ring-ring focus:border-ring font-sans" />
                </motion.div>
                <motion.div {...inputMotionProps} transition={{ ...inputMotionProps.transition, delay: 0.4 }}>
                  <Label htmlFor="message" className="text-gray-300 font-sans">Sua Mensagem</Label>
                  <Textarea id="message" placeholder="Descreva seu projeto ou dúvida..." value={formData.message} onChange={handleChange} required rows={5} className="bg-input border-border text-gray-200 placeholder-gray-500 focus:ring-ring focus:border-ring font-sans" />
                </motion.div>
                <motion.div {...inputMotionProps} transition={{ ...inputMotionProps.transition, delay: 0.5 }}>
                  <Button type="submit" size="lg" className="w-full bg-primary-blue hover:bg-primary-blue/90 text-primary-foreground font-semibold shadow-md font-sans">
                    Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={sectionVariants}
            >
              <div className="bg-card/80 p-8 rounded-xl shadow-xl glassmorphism-contact-card">
                <h2 className="text-3xl font-semibold mb-6 text-green-400">Informações de Contato</h2>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      {info.icon}
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-primary-blue transition-colors font-sans">{info.text}</a>
                      ) : (
                        <span className="ml-4 font-sans">{info.text}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card/80 p-8 rounded-xl shadow-xl glassmorphism-contact-card">
                <h2 className="text-3xl font-semibold mb-6 text-accent-gold">Siga-nos</h2>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-blue transition-colors transform hover:scale-110"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-card/80 p-8 rounded-xl shadow-xl h-64 overflow-hidden glassmorphism-contact-card">
                 <h2 className="text-3xl font-semibold mb-4 text-purple-400">Localização</h2>
                 <div className="w-full h-full rounded-md bg-input flex items-center justify-center">
                    <p className="text-gray-400 italic font-sans">Mapa do OpenStreetMap será integrado aqui.</p>
                 </div>
              </div>
            </motion.div>
          </div>
          <style jsx>{`
            .glassmorphism-contact-card {
              background: hsla(var(--card-rgb) / 0.7);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid hsla(var(--primary-blue-rgb) / 0.1);
            }
            @supports not (backdrop-filter: blur(10px)) {
              .glassmorphism-contact-card {
                background: hsl(var(--card));
              }
            }
          `}</style>
        </motion.div>
      );
    };

    export default ContactPage;