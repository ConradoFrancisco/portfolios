import { Typewriter } from "react-simple-typewriter";
import "./App.css";
import foto from "./assets/1651616086895.jpg";
import { motion } from "framer-motion";
export default function App() {
  return (
    <>
      <motion.div
        className="p-4 bg-stone-700 text-white "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex flex-row justify-end">
          <ul className="flex flex-row justify-around items-center gap-8">
            <li>About me</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}>
        <div className="flex flex-col gap-2.5 justify-center items-center mt-4">
        <h1 className="text-5xl font-bold text-white my-4">Conrado Llanos</h1>
        <p className="text-white italic font-bold my-4 text-xl">Soy un desarrollador web inclinado mas a creación de código frontend pero con habilidades para resolver tareas de backend si el proyecto lo requiere.</p>
          <img src={foto} style={{borderRadius:'50%'}} className="h-64 shadow-orange-600 shadow-2xl" alt="" />
          <h1 className="italic text-3xl font-bold text-white my-4">
          <Typewriter
            words={[ "Web Developer", "Frontend Developer", "Backend Developer" ]}
            loop={2} // Número de veces que se repite (Infinity para siempre)
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        </div>
          
      </motion.div>
    </>
  );
}
