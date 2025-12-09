import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-8"
        >
          Acerca de <span className="text-secondary">Mí</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass p-8 md:p-10 rounded-2xl shadow-xl border border-white/10"
        >
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-6">
            Hola, soy <span className="text-primary font-bold">Conrado Llanos</span>, un Desarrollador Full Stack apasionado con base en Argentina.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Con más de 3 años de experiencia, combino mi expertise en frontend con sólidas bases de backend. Soy una persona didáctica y curiosa, siempre buscando aprender nuevas tecnologías y compartir conocimientos con el equipo. Disfruto creando aplicaciones web robustas, escalables y visualmente impactantes que resuelven problemas reales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold">
              Frontend Specialist
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-sm font-semibold">
              Continuous Learner
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
