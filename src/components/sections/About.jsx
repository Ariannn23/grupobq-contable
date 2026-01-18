import { motion } from "framer-motion";
import { Award, Clock, Shield, Users, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "../../utils/constants";

const About = () => {
  const { about, founder } = COMPANY_INFO;

  const benefits = [
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description:
        "Años en el mercado respaldan nuestro servicio. Certificaciones profesionales y actualización constante.",
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description:
        "Atendemos tus consultas en menos de 24 horas. Equipo dedicado disponible cuando nos necesites.",
    },
    {
      icon: Shield,
      title: "Confidencialidad Total",
      description:
        "Tu información está 100% protegida. Manejamos datos sensibles con los más altos estándares de seguridad.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
            Nosotros
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* HISTORIA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Nuestra Historia
              </h3>

              {about.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-700 leading-relaxed ${
                    index < about.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {paragraph.parts.map((part, i) =>
                    part.strong ? (
                      <strong key={i} className={part.className || ""}>
                        {part.text}
                      </strong>
                    ) : (
                      <span key={i}>{part.text}</span>
                    ),
                  )}
                </p>
              ))}
            </motion.div>

            {/* FUNDADOR */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-500" />
                </div>
                <h4 className="text-2xl font-bold mb-2">{founder.name}</h4>
                <p className="text-primary-100 font-semibold mb-4">
                  {founder.title}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <InfoItem text={founder.location} />
                <InfoItem text={`Graduado en ${founder.university}`} />
                <InfoItem text={founder.experience} />
                <InfoItem text={founder.specialty} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* BENEFICIOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600">
            Compromiso, experiencia y resultados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full mb-4 shadow-lg">
                  <Icon className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ text }) => (
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
    <p>{text}</p>
  </div>
);

export default About;
