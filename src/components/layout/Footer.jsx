import { motion as Motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/images/logo2.png";
import ScrollLink from "../ui/ScrollLink";
import { CONTACT_INFO, COMPANY_INFO } from "../../utils/constants";

const Footer = () => {
  const { social } = CONTACT_INFO;

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* LOGO + DESCRIPCIÓN */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt={COMPANY_INFO.name} className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">{COMPANY_INFO.tagline}</p>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                "Contabilidad",
                "Asesoría Tributaria",
                "Auditoría",
                "Consultoría",
              ].map((item) => (
                <li key={item}>
                  <ScrollLink
                    href="#servicios"
                    whileHover={{}}
                    whileTap={{}}
                    className="hover:text-primary-400 transition"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h4 className="text-lg font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <ScrollLink
                  href="#nosotros"
                  whileHover={{}}
                  whileTap={{}}
                  className="hover:text-primary-400 transition"
                >
                  Nosotros
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  href="#contacto"
                  whileHover={{}}
                  whileTap={{}}
                  className="hover:text-primary-400 transition"
                >
                  Contacto
                </ScrollLink>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">Blog</span>
              </li>
              <li>
                <span className="opacity-50 cursor-not-allowed">
                  Trabaja con nosotros
                </span>
              </li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {social.facebook && (
                <Motion.a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition shadow-lg"
                >
                  <Facebook className="w-5 h-5" />
                </Motion.a>
              )}

              {social.instagram && (
                <Motion.a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </Motion.a>
              )}

              {social.linkedin && (
                <Motion.a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                </Motion.a>
              )}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
