import "./App.css";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Abilities from "./components/Abilities";
import MobileNavBar from "./components/MobileNavbar";
import SnowEffect from "./components/SnowEffect";

export default function App() {
  console.log("Portfolio v2.0 - Dark Mode Loaded");
  return (
    <div className="min-h-screen bg-dark text-gray-100 overflow-hidden relative">
      <SnowEffect />
      <NavBar />
      <MobileNavBar />

      <main className="relative z-10 space-y-24 pb-24">
        <HeroBanner />
        <AboutMe />
        <Projects />
        <Technologies />
        <Abilities />
      </main>
    </div>
  );
}
