import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { BiCheckCircle, BiSend } from "react-icons/bi";

export default function Abilities() {
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
      toast.success("Mensaje enviado correctamente", { theme: "dark" });
      resetForm();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("Hubo un error al enviar el mensaje.", { theme: "dark" });
    }
  };

  const softSkills = [
    "Creación de experiencias de usuario intuitivas y código mantenible.",
    "Trabajo colaborativo y comunicación efectiva en equipo.",
    "Curiosidad constante y aprendizaje autodidacta de nuevas tecnologías.",
    "Enfoque en Frontend: arquitectura, rendimiento y diseño responsive.",
    "Experiencia en Backend con Node.js y bases de datos para soluciones integrales."
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Blobs for specific section ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Habilidades - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
            Habilidades <span className="text-primary">Blandas</span>
          </h2>
          <div className="space-y-6">
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Más allá del código, me enfoco en aportar valor a través de la calidad, la comunicación y la resolución creativa de problemas.
            </p>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-all text-gray-300 group"
                >
                  <BiCheckCircle className="text-secondary text-2xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-light group-hover:text-white transition-colors">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Formulario de contacto - Right Side */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-10 rounded-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

          <h2 className="text-3xl font-bold font-heading mb-2">Contáctame</h2>
          <p className="text-gray-400 mb-8">¿Tienes un proyecto en mente? ¡Hablemos!</p>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={sendEmail}>
            {({ isSubmitting }) => (
              <Form className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-xs mt-1 ml-1" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-xs mt-1 ml-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={4}
                    className="w-full px-4 py-3 bg-dark/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all resize-none"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-400 text-xs mt-1 ml-1" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensaje <BiSend className="text-xl group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}