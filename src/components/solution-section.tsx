import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: "lucide:layout-grid",
      title: "Чёткая система обучения",
      description: "От основ до мастерства — структурированный подход к освоению ИИ"
    },
    {
      icon: "lucide:briefcase",
      title: "Практические навыки",
      description: "Которые применишь уже завтра в своей работе и бизнесе"
    },
    {
      icon: "lucide:lightbulb",
      title: "Инструменты для осознанного развития",
      description: "Для тех, кто выбирает путь интеллектуальной свободы"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Путь Свободы в мире ИИ
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Наш курс — это путь к интеллектуальной свободе, свободе времени и финансовой свободе через осознанное использование искусственного интеллекта.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-card"
              variants={itemVariants}
            >
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon icon={solution.icon} className="text-gold text-3xl" />
              </div>
              <h3 className="text-deep-blue font-semibold text-xl mb-3">{solution.title}</h3>
              <p className="text-text-gray">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg p-8 shadow-card max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-start gap-6">
            <div className="bg-deep-blue/10 rounded-full p-4 flex-shrink-0">
              <Icon icon="lucide:lightbulb" className="text-deep-blue text-3xl" />
            </div>
            <div>
              <h3 className="text-deep-blue font-semibold text-xl mb-3">Философия проекта FanisProAI</h3>
              <p className="text-text-gray mb-4">
                Как орёл парит высоко над землей, видя полную картину, так и мы стремимся дать вам 
                возможность подняться над рутиной, увидеть новые горизонты и обрести свободу через технологии.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-full text-sm">
                  Свобода через знания
                </span>
                <span className="bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-full text-sm">
                  Осознанное развитие
                </span>
                <span className="bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-full text-sm">
                  Технологии для человека
                </span>
                <span className="bg-deep-blue/10 text-deep-blue px-3 py-1 rounded-full text-sm">
                  Баланс духовности и практичности
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};