import { Typewriter } from "react-simple-typewriter";
import foto from "../assets/1651616086895.jpeg";
import { motion } from "framer-motion";


export default function HeroBanner() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob will-change-transform"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000 will-change-transform"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000 will-change-transform"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group mb-8"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>


        <div className="relative">
          <img
            src={foto}
            className="relative h-64 w-64 object-cover rounded-full border-4 border-dark shadow-2xl"
            alt="Conrado Llanos"
          />


        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl md:text-7xl font-bold font-heading text-center"
      >
        Conrado <span className="text-gradient">Llanos</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-4xl text-gray-400 font-bold my-4 font-heading h-16 text-center"
      >
        <span>I am a </span>
        <span className="text-secondary">
          <Typewriter
            words={["Web Developer", "Backend Developer", "Frontend Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-400 max-w-2xl text-center mx-8 text-lg font-light leading-relaxed"
      >
        Desarrallador web focado en la creación de experiencias digitales excepcionales.
        Especializado en Frontend con sólidas habilidades en Backend para entregar soluciones completas.
      </motion.p>
    </section>
  );
}
