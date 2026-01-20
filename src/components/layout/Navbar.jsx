import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo2.png";
import ScrollLink from "../ui/ScrollLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <ScrollLink
            href="#inicio"
            whileHover={{}}
            whileTap={{}}
            className="flex items-center cursor-pointer"
          >
            <Motion.img
              src={logo}
              alt="Grupo BQ Logo"
              className="h-12 w-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            />
          </ScrollLink>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                href={link.href}
                whileHover={{}}
                whileTap={{}}
                className="relative text-gray-700 hover:text-primary-600 transition group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}

            <ScrollLink
              href="#contacto"
              className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition shadow-md"
            >
              Consulta Gratis
            </ScrollLink>
          </div>

          {/* MOBILE BUTTON */}
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

      {/* MOBILE MENU */}
      {menuOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                href={link.href}
                onAfterClick={() => setMenuOpen(false)}
                whileHover={{}}
                whileTap={{}}
                className="block text-gray-700 hover:text-primary-600"
              >
                {link.label}
              </ScrollLink>
            ))}

            <ScrollLink
              href="#contacto"
              onAfterClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600"
            >
              Consulta Gratis
            </ScrollLink>
          </div>
        </Motion.div>
      )}
    </nav>
  );
};

export default Navbar;
