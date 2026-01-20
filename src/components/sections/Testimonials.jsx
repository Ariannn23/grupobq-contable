import { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const animationRef = useRef(null);

  // Triplicamos los testimonios para el efecto infinito
  const extendedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  const cardWidth = 345 + 24; // ancho de la card + gap
  const totalWidth = cardWidth * extendedTestimonials.length;

  useEffect(() => {
    if (!isDragging) {
      const startAnimation = () => {
        animationRef.current = requestAnimationFrame(() => {
          setCurrentX((prev) => {
            const newX = prev - 1;

            if (Math.abs(newX) >= cardWidth * testimonialsData.length) {
              return 0;
            }
            return newX;
          });
          startAnimation();
        });
      };

      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, cardWidth]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Testimonios
          </h2>
        </Motion.div>

        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <Motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -(totalWidth / 3), right: cardWidth }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              setCurrentX((prev) => {
                const newX = prev + info.offset.x;
                if (Math.abs(newX) >= cardWidth * testimonialsData.length) {
                  return newX % (cardWidth * testimonialsData.length);
                }
                return newX;
              });
            }}
            animate={{ x: currentX }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
            style={{ width: "max-content" }}
          >
            {extendedTestimonials.map((testimonio, index) => (
              <Motion.div
                key={`${testimonio.nombre}-${index}`}
                className="w-[345px] h-[204px] bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-between"
                whileHover={{
                  scale: isDragging ? 1 : 1.03,
                  y: isDragging ? 0 : -5,
                }}
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
                  <p className="text-gray-500 text-sm">{testimonio.cargo}</p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
