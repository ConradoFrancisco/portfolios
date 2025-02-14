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
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    descripcion:
      "Es lo que mas uso hoy en dia, me gusta mucho JavaScript, este mismo portfolio lo desarrolle con React.",
  },
  {
    id: 2,
    nombre: "TypeScript",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    descripcion:
      "Empezé a usarlo en proyectos mas grandes, me ayuda a tener un código mas limpio y mantenible, Puedo usar JavaScript, pero prefiero TypeScript.",
  },
  {
    id: 3,
    nombre: "Node.js",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    descripcion:
      "Aprendí a usar node luego de aprender php, me gusta su uso con Express.js para crear APIs.",
  },
  {
    id: 4,
    nombre: "Next.js",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    descripcion:
      "El sitio del colegio inmobiliario lo desarrollé con Next.js, me gusta su uso del server side rendering.",
  },
  {
    id: 5,
    nombre: "Tailwind CSS",
    imagen:
        "https://i.ytimg.com/vi/wXGlWLQdgf4/maxresdefault.jpg",
    descripcion:
      "Me gusta mucho la facilidad para escribir estilos de este framework, lo estoy usando para construir este mismo portfolio.",
  },
  {
    id:6,
    nombre:"Bootstrap",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    descripcion:"Lo que mas me gusta de bootstrap es la facilidad y versatilidad que tiene para crear sitios web responsive. Mis 2 grandes proyectos estan hechos con bootstrap."
  },
  {
    id:7,
    nombre:"PHP",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    descripcion:"Manejo php para proyectos pequeños, me gusta su facilidad para integrar con bases de datos. Y ademas fue el primer lenguaje de programación que aprendí."
  },
  {
    id:8,
    nombre:"postgreSQL",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    descripcion:"PostgreSQL es la herramienta que utilizo para gestionar bases de datos, me gusta su facilidad para integrar con Node.js, pero puedo usar otros motoroes de base de datos como Mysql o MongoDB."
  }
];

export default function Technologies() {
  return (
    <div className="grid place-items-center text-white italic container mx-auto" id="technologies" >
      <h1 className="text-4xl font-bold mt-8">Tecnologías</h1>
      <div className="text-white w-full my-8">
        <div className="mx-auto grid md:grid-cols-4 md:gap-8">
          {tecnologias.map((carta) => {
            return (
              <div
              key={carta.id}
                style={{
                  backgroundColor: "#FDFFFC",
                  boxShadow: "10px 10px 15px #437C90",
                }}
                className="shadow-xl m-4 border flex flex-col p-4 justify-center items-center hover:scale-105 duration-300"
              >
                <img className={`${carta.id  === 5 ? 'w-48' : 'w-20'}`} src={carta.imagen} alt="" />
                <h2 className="border-b font-bold text-3xl py-3 text-black italic">
                  {carta.nombre}
                </h2>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-black">{carta.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
