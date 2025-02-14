export default function AboutMe() {
  return (
    <>
      <hr />
      <div
        className="flex flex-col items-center border-b-black mt-8 py-8 text-black italic "
        style={{ backgroundColor: "#FDFFFC" }}
      >
        <h1 className="text-4xl font-bold">Acerca de mi</h1>
        <p className="text-lg text-center mt-4 mx-7">
            Me llamo Conrado Llanos, soy argentino, tengo 28 años y soy un desarrollador web mas enfoncado al frontend, con +3 años de experiencia en el rubro. <br />
            Soy una persona didáctica, divertida, me gusta transmitir los conocimientos que tengo y aprender de los demas diferentes habilidades de las cuales carezco. <br />
          {/* <ul>
            <li>
              ✔️ 80% de mi trabajo se centra en frontend: arquitectura de
              componentes, optimización de rendimiento y diseño responsive.
            </li>
            <li>
              ✔️ Experiencia complementaria en backend con Node.js y TypeORM
              (para integraciones API y proyectos full stack).{" "}
            </li>
            <li>
              ✔️ Facilidad y gusto por crear experiencias de usuario intuitivas
              y código mantenible.
            </li>
          </ul> */}
        </p>
      </div>
    </>
  );
}
