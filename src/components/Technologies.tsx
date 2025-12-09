import { motion } from "framer-motion";

interface Itecnologia {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
}

const tecnologias: Itecnologia[] = [
  {
    id: 1,
    nombre: "React",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    descripcion: "Biblioteca principal para desarrollo de interfaces dinámicas y escalables.",
  },
  {
    id: 2,
    nombre: "TypeScript",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    descripcion: "Superset de JavaScript que añade tipado estático para código robusto.",
  },
  {
    id: 3,
    nombre: "Node.js",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    descripcion: "Entorno de ejecución para backend rápido y escalable.",
  },
  {
    id: 4,
    nombre: "Next.js",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    descripcion: "Framework de React para producción con SSR y optimización SEO.",
  },
  {
    id: 5,
    nombre: "Tailwind CSS",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    descripcion: "Framework de utilidad para diseño rápido y consistente.",
  },
  {
    id: 6,
    nombre: "Bootstrap",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    descripcion: "Framework CSS clásico para prototipado rápido y responsive.",
  },
  {
    id: 7,
    nombre: "PHP",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    descripcion: "Lenguaje de script del lado del servidor para integraciones legacy.",
  },
  {
    id: 8,
    nombre: "PostgreSQL",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    descripcion: "Base de datos relacional robusta y confiable.",
  },
  {
    id: 9,
    nombre: "Prompt Engineering",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    descripcion: "Especialista en diseño de prompts para obtener los mejores resultados de LLMs.",
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center"
        >
          Stack <span className="text-primary">Tecnológico</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tecnologias.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)" }}
              className="glass p-6 rounded-xl flex flex-col items-center text-center group transition-all duration-300 border border-white/5 hover:border-primary/30"
            >
              <div className="w-16 h-16 mb-4 p-3 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <img
                  src={tech.imagen}
                  alt={tech.nombre}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-primary transition-colors">
                {tech.nombre}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {tech.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
