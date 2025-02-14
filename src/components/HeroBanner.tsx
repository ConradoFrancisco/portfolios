import { Typewriter } from "react-simple-typewriter";
import foto from "../assets/1651616086895.jpg";

export default function HeroBanner(){
    return(
        <div id="home" className="flex flex-col gap-2.5 justify-center items-center ">
        <h1 className="text-5xl font-bold text-white my-7">Conrado Llanos</h1>
        
          <img src={foto} style={{borderRadius:'50%'}} className="h-64 shadow-orange-600 shadow-2xl" alt="" />
          <h1 className="italic text-3xl font-bold text-white my-4">
          <Typewriter
            words={[ "Web Developer", "Backend Developer", "Frontend Developer" ]}
            loop={2} // Número de veces que se repite (Infinity para siempre)
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          
        </h1>
        <p className="text-white italic font-bold my-4 text-xl text-center mx-8">Soy un desarrollador web inclinado mas a creación de código frontend pero con habilidades para resolver tareas de backend si el proyecto lo requiere.</p>
        </div>
    )
}