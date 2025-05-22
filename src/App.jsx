import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Home, Briefcase, Users, FolderKanban, Mail } from 'lucide-react';

    import HomePage from '@/pages/HomePage';
    import AboutPage from '@/pages/AboutPage';
    import ServicesPage from '@/pages/ServicesPage';
    import ProjectsPage from '@/pages/ProjectsPage';
    import ContactPage from '@/pages/ContactPage';
    import { Toaster } from '@/components/ui/toaster';

    const navItems = [
      { path: '/', name: 'Início', icon: <Home className="w-5 h-5 mr-2" /> },
      { path: '/sobre', name: 'Sobre Nós', icon: <Users className="w-5 h-5 mr-2" /> },
      { path: '/servicos', name: 'Serviços', icon: <Briefcase className="w-5 h-5 mr-2" /> },
      { path: '/projetos', name: 'Projetos', icon: <FolderKanban className="w-5 h-5 mr-2" /> },
      { path: '/contato', name: 'Contato', icon: <Mail className="w-5 h-5 mr-2" /> },
    ];

    const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/559a3195-49cc-4450-8c8c-26d612bfaa9f/ebf25a800812d8f4d0ff17f668105601.png";

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-slate-800 to-background text-foreground">
            <header className="bg-background/80 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-border">
              <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/">
                  <img src={logoUrl} alt="Nobreeng Logo" className="h-12 md:h-14" />
                </Link>
                <ul className="flex space-x-6 items-center">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="flex items-center text-gray-300 hover:text-primary-blue transition-colors duration-300 group"
                      >
                        {item.icon}
                        <span className="group-hover:underline underline-offset-4 decoration-primary-blue decoration-2 font-sans">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            <main className="flex-grow container mx-auto px-6 py-12">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/servicos" element={<ServicesPage />} />
                <Route path="/projetos" element={<ProjectsPage />} />
                <Route path="/contato" element={<ContactPage />} />
              </Routes>
            </main>

            <footer className="bg-background/80 backdrop-blur-md shadow-inner py-8 text-center border-t border-border">
              <div className="container mx-auto px-6">
                <p className="text-gray-400 text-sm font-sans">
                  &copy; {new Date().getFullYear()} Nobreeng. Todos os direitos reservados.
                </p>
                <p className="text-gray-500 text-xs mt-1 font-sans">
                  Engenharia e Inovação para um Futuro Sustentável.
                </p>
              </div>
            </footer>
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;