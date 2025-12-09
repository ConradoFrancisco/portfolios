import laCasa from "../assets/logoNegro.png";
import colegio from "../assets/logo-white.png";
import { BiRightArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Revista digital "La Casa"',
      subtitle: "Legislatura CABA",
      image: laCasa,
      link: "https://larevista.legislatura.gob.ar/",
      description: "Desarrollo Full Stack. Frontend moderno y API robusta para la comunicación con base de datos.",
      tags: ["React", "API", "Database"]
    },
    {
      id: 2,
      title: "Colegio Único de Corredores Inmobiliarios",
      subtitle: "CUCICBA",
      image: colegio,
      link: "https://colegioinmobiliario.org.ar/",
      bgImageClass: "bg-[#1c4076]",
      description: "Plataforma integral con gestión de matriculados. Frontend completo y arquitectura de base de datos personalizada.",
      tags: ["Next.js", "SQL", "Frontend"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-dark relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center"
        >
          Proyectos <span className="text-secondary">Destacados</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className={`h-64 overflow-hidden relative ${project.bgImageClass || 'bg-white'}`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors font-bold group/link"
                >
                  Ver Proyecto
                  <BiRightArrowCircle size={24} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
