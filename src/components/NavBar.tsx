import foto from '../assets/1651616086895.jpg'

export default function NavBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" top-0 right-0 p-2 w-full flex justify-between md:flex hidden  ">
      <div onClick={() => scrollToSection("home")} className="flex cursor-pointer flex-row items-center gap-3">
          <img  className='w-12'src={foto} style={{borderRadius:'50%'}} alt="" />
          <h1 className="text-2xl font-bold">Conrado Llanos</h1>
        </div>
      <ul className="flex flex-row justify-around items-center gap-8 font-bold italic">
        <li onClick={() => scrollToSection("about")} className="cursor-pointer">Acerca de mí</li>
        <li onClick={() => scrollToSection("projects")} className="cursor-pointer">Proyectos</li>
        <li onClick={() => scrollToSection("technologies")} className="cursor-pointer">Tecnologías</li>
        <li onClick={() => scrollToSection("skills")} className="cursor-pointer">Habilidades</li>
        <li onClick={() => scrollToSection("contact")} className="cursor-pointer">Contacto</li>
      </ul>
    </nav>
  );
}
