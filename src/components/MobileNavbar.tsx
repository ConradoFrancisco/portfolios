import { useState } from "react";
import foto from "../assets/1651616086895.jpeg";

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="flex justify-between p-2  text-black md:hidden">
        <img
          className="w-12"
          src={foto}
          style={{ borderRadius: "50%" }}
          alt=""
        />

        <button onClick={toggleMenu} className="text-3xl">
          &#9776;
        </button>
      </nav>

      <div
        className={`fixed inset-0  bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Lateral menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-gray-900 text-white w-64 p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <ul className="space-y-6">
          <li>
            <a
              onClick={() => {
                toggleMenu();
                scrollToSection("about");
              }}
              href="#"
              className="text-lg font-bold"
            >
              Acerca de mí
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                toggleMenu();
                scrollToSection("projects");
              }}
              href="#projects"
              className="text-lg font-bold"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                toggleMenu();
                scrollToSection("technologies");
              }}
              href="#technologies"
              className="text-lg font-bold"
            >
              Tecnologías
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                toggleMenu();
                scrollToSection("skills");
              }}
              href="#"
              className="text-lg font-bold"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                toggleMenu();
                scrollToSection("contact");
              }}
              href="#contact"
              className="text-lg font-bold"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
