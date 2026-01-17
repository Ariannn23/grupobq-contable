import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Menu,
  X,
  Calculator,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Shield,
  BarChart3,
  Briefcase,
  PieChart,
  Facebook,
  Instagram,
  Linkedin,
  Star,
} from "lucide-react";
import logo from "./assets/images/logo2.png";
import heroImage from "./assets/images/hero-image.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isDragging, setIsDragging] = useState(false);

  const testimonios = [
    {
      nombre: "Carlos Mendoza",
      cargo: "Gerente PyME",
      texto: "Grupo BQ nos brindó orden contable y seguridad tributaria.",
    },
    {
      nombre: "Ana Rodríguez",
      cargo: "Administradora",
      texto: "Acompañamiento constante y asesoría clara.",
    },
    {
      nombre: "Luis Paredes",
      cargo: "Empresario",
      texto: "Mejoramos nuestro control financiero.",
    },
    {
      nombre: "María González",
      cargo: "Directora Financiera",
      texto: "Profesionales confiables que entienden nuestras necesidades.",
    },
    {
      nombre: "Roberto Silva",
      cargo: "Propietario",
      texto: "Excelente servicio y atención personalizada.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center cursor-pointer"
            >
              <img src={logo} alt="Grupo BQ Logo" className="h-12 w-auto" />
            </motion.a>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="relative text-gray-700 hover:text-primary-600 transition group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#servicios"
                className="relative text-gray-700 hover:text-primary-600 transition group"
              >
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#nosotros"
                className="relative text-gray-700 hover:text-primary-600 transition group"
              >
                Nosotros
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contacto"
                className="relative text-gray-700 hover:text-primary-600 transition group"
              >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition shadow-md"
              >
                Consulta Gratis
              </motion.a>
            </div>

            <button
              className="md:hidden text-secondary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#inicio"
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block text-gray-700 hover:text-primary-600"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </a>
              <button className="w-full bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">
                Consulta Gratis
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 pb-20 bg-gradient-to-br from-primary-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Tu Socio Contable de
                <span className="text-primary-500"> Confianza</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Más de 10 años ayudando a empresas y emprendedores a mantener
                sus finanzas en orden. Expertos en contabilidad, auditoría y
                asesoría tributaria.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition shadow-lg text-center"
                >
                  Agendar Consulta
                </motion.a>
                <motion.a
                  href="#servicios"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 hover:text-white transition text-center"
                >
                  Nuestros Servicios
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Equipo Grupo BQ"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden w-full h-96 bg-gradient-to-br from-primary-500 to-primary-700 items-center justify-center">
                  <Users className="w-32 h-32 text-white opacity-50" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <p className="font-semibold">Atención Personalizada</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <p className="text-sm">Respuesta en menos de 24hrs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones contables adaptadas a tus necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12" />,
                title: "Contabilidad General",
                description:
                  "Llevamos tu contabilidad al día con registros precisos y organizados. Estados financieros mensuales y análisis detallados.",
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Asesoría Tributaria",
                description:
                  "Optimiza tu carga fiscal de manera legal. Declaraciones de impuestos y planificación tributaria estratégica.",
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Auditoría Financiera",
                description:
                  "Revisión exhaustiva de tus estados financieros. Garantizamos transparencia y cumplimiento normativo.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Nómina y RRHH",
                description:
                  "Gestión integral de nóminas, beneficios sociales y cumplimiento laboral para tu equipo.",
              },
              {
                icon: <PieChart className="w-12 h-12" />,
                title: "Consultoría Financiera",
                description:
                  "Análisis financiero profundo y estrategias para mejorar la rentabilidad de tu negocio.",
              },
              {
                icon: <Briefcase className="w-12 h-12" />,
                title: "Constitución de Empresas",
                description:
                  "Te acompañamos en todo el proceso de creación y formalización de tu empresa.",
              },
            ].map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-200"
              >
                <div className="text-primary-500 mb-4">{servicio.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {servicio.title}
                </h3>
                <p className="text-gray-600">{servicio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section
        id="nosotros"
        className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Nuestra Historia */}
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Nuestra Historia
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong className="text-primary-600">
                    Grupo BQ Contadores y Asesores
                  </strong>{" "}
                  nace con el objetivo de brindar un servicio contable
                  confiable, claro y estratégico, enfocado en el crecimiento
                  sostenible de pequeñas y medianas empresas.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Con más de <strong>10 años de experiencia</strong> en
                  contabilidad, tributación y asesoría financiera, hemos
                  acompañado a diversas empresas en la toma de decisiones
                  seguras, cumplimiento normativo y mejora de su gestión
                  económica.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro enfoque se basa en la <strong>ética</strong>, la{" "}
                  <strong>actualización constante</strong> y una{" "}
                  <strong>atención personalizada</strong>, entendiendo que cada
                  empresa tiene necesidades únicas y requiere soluciones claras
                  y eficientes.
                </p>
              </motion.div>

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
                  <h4 className="text-2xl font-bold mb-2">
                    Segundo Armando Bautista Rojas
                  </h4>
                  <p className="text-primary-100 font-semibold mb-4">
                    Contador Público Colegiado
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>Natural de Paijan, La Libertad - Perú</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>Graduado en ULADECH Católica</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>+10 años de experiencia profesional</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>Especialista en PYMES</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Por Qué Elegirnos */}
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
            {[
              {
                icon: <Award className="w-16 h-16" />,
                title: "Experiencia Comprobada",
                description:
                  "Más de 15 años en el mercado respaldan nuestro servicio. Certificaciones profesionales y actualización constante.",
              },
              {
                icon: <Clock className="w-16 h-16" />,
                title: "Respuesta Rápida",
                description:
                  "Atendemos tus consultas en menos de 24 horas. Equipo dedicado disponible cuando nos necesites.",
              },
              {
                icon: <Shield className="w-16 h-16" />,
                title: "Confidencialidad Total",
                description:
                  "Tu información está 100% protegida. Manejamos datos sensibles con los más altos estándares de seguridad.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Testimonios
            </h2>
          </motion.div>

          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              className="flex gap-6"
              drag="x"
              dragConstraints={{ left: -1800, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              animate={!isDragging ? { x: [0, -1800] } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...testimonios, ...testimonios, ...testimonios].map(
                (testimonio, index) => (
                  <motion.div
                    key={index}
                    className="w-[345px] h-[204px] bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-between"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: isDragging ? "none" : "auto" }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <svg
                          className="w-8 h-8 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 italic text-base leading-relaxed mb-3">
                        {testimonio.texto}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-3">
                      <h4 className="font-bold text-secondary text-base">
                        {testimonio.nombre}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonio.cargo}
                      </p>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              Estamos listos para ayudarte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none transition"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition shadow-lg"
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p>+51 999 999 999</p>
                      <p>+51 888 888 888</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>contacto@grupocontable.com</p>
                      <p>info@grupocontable.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p>Av. Principal 123, Oficina 456</p>
                      <p>Lima, Perú</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-2 border-primary-200 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Lunes - Viernes:</span> 9:00
                    AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sábados:</span> 9:00 AM -
                    1:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Domingos:</span> Cerrado
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Grupo BQ Logo" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400">
                Tu socio de confianza en servicios contables y financieros.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary-400 transition"
                  >
                    Contabilidad
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary-400 transition"
                  >
                    Asesoría Tributaria
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary-400 transition"
                  >
                    Auditoría
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-primary-400 transition"
                  >
                    Consultoría
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-primary-400 transition"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-primary-400 transition"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition">
                    Trabaja con nosotros
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition shadow-lg"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Grupo Contable. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
