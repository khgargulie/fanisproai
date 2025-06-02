import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const BenefitsSection: React.FC = () => {
  const benefitCategories = [
    {
      title: "Понимание технологии",
      icon: "lucide:lightbulb",
      benefits: [
        "Разберёшься в принципах работы ИИ",
        "Поймёшь, какие задачи можно делегировать нейросетям",
        "Научишься выбирать подходящий инструмент для конкретной задачи"
      ]
    },
    {
      title: "Готовые инструменты",
      icon: "lucide:award",
      benefits: [
        <span key="1">
          <span className="text-gold font-bold">25+</span> промтов для жизни и бизнеса
        </span>,
        "Гайд по внедрению ИИ в работу эксперта",
        "Обновления и новости в ТГ канале"
      ]
    },
    {
      title: "Практические навыки",
      icon: "lucide:code",
      benefits: [
        "Создание качественного контента за минуты",
        "Улучшение существующих текстов, презентаций, идей",
        "Проведение исследований и анализа данных",
        "Автоматизация повторяющихся задач"
      ]
    },
    {
      title: "Экономия времени и денег",
      icon: "lucide:clock",
      benefits: [
        <span key="1">
          Сокращение времени на рутину в <span className="text-gold font-bold">3-5 раз</span>
        </span>,
        "Экономия на копирайтерах, аналитиках, помощниках",
        "Повышение качества результата при меньших усилиях"
      ]
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
    <section className="py-20 bg-deep-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результат, который изменит твою работу
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            После прохождения курса ты получишь не просто знания, а конкретные инструменты 
            и навыки, которые сразу же сможешь применить на практике.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefitCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon icon={category.icon} className="text-gold text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon icon="lucide:check" className="text-gold mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};