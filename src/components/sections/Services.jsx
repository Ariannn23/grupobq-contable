import { motion } from "framer-motion";
import { servicesData } from "../../data/services";

const Services = () => {
  return (
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
          {servicesData.map((servicio, index) => {
            const IconComponent = servicio.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-200"
              >
                <div className="text-primary-500 mb-4">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {servicio.title}
                </h3>
                <p className="text-gray-600">{servicio.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
