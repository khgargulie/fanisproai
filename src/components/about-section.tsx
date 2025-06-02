import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  const experiences = [
    "Более 6 лет в маркетинге — запускал курсы, создавал сайты, настраивал автоматизации",
    "Использую ИИ в реальных проектах: помогал в разработке планов развития и IT-составляющей для 2х компаний, решаю десятки задач ежедневно при помощи ИИ",
    "Все методы проверены на практике — ничего не рассказываю «из головы», только то, что сам использую",
    "Совмещаю технологии с человечностью — ИИ для меня не замена людям, а инструмент их развития"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Кто я и почему мне можно доверять
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/fanis-photo.jpg" 
                  alt="Фанис Хакимов" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-white p-3 rounded-lg shadow-lg">
                <Icon icon="lucide:award" className="text-3xl" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-xl text-text-gray mb-6">
              Меня зовут Фанис, и я не просто изучаю ИИ — я применяю его в реальном бизнесе каждый день.
            </p>
            
            <h3 className="text-deep-blue font-semibold text-xl mb-4">Мой опыт:</h3>
            <ul className="space-y-4 mb-8">
              {experiences.map((exp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-deep-blue text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-text-gray">{exp}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-deep-blue mb-6">
              <h4 className="text-deep-blue font-semibold text-lg mb-2">Моя миссия</h4>
              <p className="text-text-gray">
                Через технологии нести пользу людям, показывая, как ИИ может стать инструментом 
                не просто заработка, а осмысленной и свободной жизни.
              </p>
            </div>
            
            <div className="bg-gold/10 p-4 rounded-lg">
              <p className="text-center text-gold font-bold">
                Все методы проверены на практике
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
