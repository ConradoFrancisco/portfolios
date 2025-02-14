import "./App.css";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Abilities from "./components/Abilities";
export default function App() {
  return (
    <>
      <motion.div
      style={{backgroundColor:'#FDFFFC'}}
        className="p-4 text-black "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <HeroBanner />
      <AboutMe/>
      <Projects/>
      <Technologies/>
      <Abilities/>
      </motion.div>
    </>
  );
}
