import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users } from "lucide-react";
import { heroSlidesData } from "../../data/heroSlides";
import { handleNavClick } from "../../utils/scroll";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="pt-24 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
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
              Más de 15 años ayudando a empresas y emprendedores a mantener sus
              finanzas en orden. Expertos en contabilidad, auditoría y asesoría
              tributaria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition shadow-lg text-center"
              >
                Agendar Consulta
              </motion.a>

              <motion.a
                href="#servicios"
                onClick={(e) => handleNavClick(e, "#servicios")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-500 hover:text-white transition text-center"
              >
                Nuestros Servicios
              </motion.a>
            </div>
          </motion.div>

          {/* SLIDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-500 to-primary-700 w-full aspect-[3/2] md:aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={heroSlidesData[currentSlide].image}
                    alt={heroSlidesData[currentSlide].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />

                  {/* Fallback */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 items-center justify-center">
                    <Users className="w-32 h-32 text-white opacity-50" />
                  </div>

                  {/* TEXTO SOBRE IMAGEN */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-900/90 to-transparent p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center space-x-2 mb-2"
                    >
                      {(() => {
                        const Icon = heroSlidesData[currentSlide].icon;
                        return Icon ? <Icon className="w-5 h-5" /> : null;
                      })()}
                      <p className="font-semibold text-lg">
                        {heroSlidesData[currentSlide].title}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <p className="text-sm">
                        {heroSlidesData[currentSlide].subtitle}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* INDICADORES */}
              <div className="absolute bottom-20 right-6 flex space-x-2 z-10">
                {heroSlidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
