import { useState, useEffect } from 'react';
import foto from '../assets/1651616086895.jpeg';
import { motion } from 'framer-motion';
import Snowfall from 'react-snowfall'
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Snowfall color='white' />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
          } hidden md:flex justify-between items-center px-8 lg:px-16`}
      >
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative">
            <img
              className='w-12 h-12 rounded-full border-2 border-primary/50 group-hover:border-secondary transition-colors'
              src={foto}
              alt="Profile"
            />
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10 group-hover:bg-secondary/40 transition-colors"></div>
          </div>
          <h1 className="text-xl font-bold font-heading tracking-wide">
            Conrado<span className="text-primary"> Llanos</span>
          </h1>
        </div>

        <ul className="flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
          {[
            { id: 'about', label: 'Acerca de mí' },
            { id: 'projects', label: 'Proyectos' },
            { id: 'technologies', label: 'Tecnologías' },
            { id: 'skills', label: 'Habilidades' },
            { id: 'contact', label: 'Contacto' },
          ].map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-secondary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
