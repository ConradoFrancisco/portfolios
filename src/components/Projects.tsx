import laCasa from "../assets/logoNegro.png";
import colegio from "../assets/logo-white.png";
import { BiRightArrowCircle } from "react-icons/bi";

export default function Projects() {
  return (
    <div className="grid place-items-center text-white italic border-b bg-gray-900">
      <h1 className="text-4xl font-bold mt-8">Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {/* Proyecto 1 */}
        <div className="max-w-sm m-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="https://larevista.legislatura.gob.ar/" target="_blank">
            <img className="rounded-t-lg min-h-[270px]" src={laCasa} alt="" />
          </a>
          <div className="p-5">
            <a href="https://larevista.legislatura.gob.ar/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Revista digital "La Casa", de la legislatura de la ciudad de
                Buenos Aires.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              En esta web estuve y estoy a cargo del desarrollo del frontend
              completo, tanto como de la <i>API</i> que se encarga de establecer
              comunicación con la base de datos.
            </p>
            <a
              href="https://larevista.legislatura.gob.ar/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Ir a la web <BiRightArrowCircle size={20} className="ms-2" />
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="max-w-sm m-4  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="https://colegioinmobiliario.org.ar/" target="_blank">
            <img
              className="rounded-t-lg bg-[#1c4076] min-h-[270px] object-contain p-5"
              src={colegio}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://colegioinmobiliario.org.ar/" target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Colegio Único de Corredores Inmobiliarios de la Ciudad de Buenos
                Aires
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              En este desarrollo estuve a cargo del desarrollo frontend completo
              y gran parte de la <i>API</i> que se encarga de comunicarse con la
              base de datos, también creada por mí.
            </p>
            <a
              href="https://colegioinmobiliario.org.ar/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Ir a la web <BiRightArrowCircle size={20} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
