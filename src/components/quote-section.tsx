import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Icon 
            icon="lucide:quote" 
            className="text-white/30 text-6xl mx-auto mb-6" 
          />
          <blockquote className="text-xl md:text-2xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
            Наш курс — это путь к интеллектуальной свободе, свободе времени и финансовой свободе через осознанное использование искусственного интеллекта.
          </blockquote>
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-1 bg-white/30 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

