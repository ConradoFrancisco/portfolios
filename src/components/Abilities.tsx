import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Abilities(){
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("Correo inválido")
      .required("Campo obligatorio"),
    message: Yup.string()
      .min(10, "Debe tener al menos 10 caracteres")
      .required("Campo obligatorio"),
  });

  const sendEmail = async (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      const response = await emailjs.send(
        "service_3usynzp",
        "template_7uu2iy4",
        Object.fromEntries(formData),
        "Ghgnuqit4-nyDamzq"
      );

      console.log("Email enviado:", response);
      toast.success("Mensaje enviado correctamente",{theme:"dark"});
      resetForm();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje.");
    }
  };
    return(
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-t bg-gray-900 text-white italic">
      {/* Habilidades */}
      <div>
        <h2 className="text-3xl font-bold mb-5 text-center mt-4">Habilidades</h2>
        <ul className=" pl-5 space-y-2 text-gray-300 gap-3 ">
        
          <li className="text-lg my-6">✔️ Facilidad y gusto por crear experiencias de usuario intuitivas y código mantenible.</li>
          <li className="text-lg my-6">✔️ Facilidad para relacionarme y poder trabajar con otras personas con un objetivoen común.</li>
          <li className="text-lg my-6">✔️ Curiosidad por el mundo de la informatica, siempre estoy buscando nuevos caminos y tecnologias para resolver los problemas que voy afrontando en esta profesión</li>
          <li className="text-lg my-6">✔️ 80% de mi trabajo se centra en frontend: arquitectura de componentes, optimización de rendimiento y diseño responsive.</li>
          <li className="text-lg my-6">✔️ Experiencia en backend con Node.js y TypeORM (para integraciones API y proyectos full stack).</li>
        </ul>
      </div>

      {/* Formulario de contacto */}
      <div className="bg-gray-800 p-0 md:p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center mt-8 md:mt-0">Contáctame</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={sendEmail}>
      {({ isSubmitting }) => (
        <Form className="space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Tu correo"
              className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field
              as="textarea"
              name="message"
              placeholder="Tu mensaje"
              rows={4}
              className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </Form>
      )}
    </Formik>
      </div>
    </section>
    )
}