import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: "lucide:frown",
      title: "Пробуешь ChatGPT, но получаешь банальные и бесполезные ответы?",
      description: "Большинство пользователей не знают, как правильно формулировать запросы и получают разочаровывающие результаты."
    },
    {
      icon: "lucide:clock",
      title: "Тратишь часы на создание контента, который ИИ может сделать за минуты?",
      description: "Написание текстов, планов, отчетов вручную отнимает драгоценное время, которое можно использовать эффективнее."
    },
    {
      icon: "lucide:wrench",
      title: "Не знаешь, как правильно «разговаривать» с нейросетью, чтобы получить нужный результат?",
      description: "Существуют проверенные техники формулирования запросов, которые дают качественно другие результаты."
    },
    {
      icon: "lucide:compass",
      title: "Видишь, как другие используют ИИ для бизнеса, но не понимаешь, с чего начать?",
      description: "Технологии развиваются стремительно, и без системного подхода сложно найти свой путь."
    },
    {
      icon: "lucide:alert-triangle",
      title: "Боишься, что отстанешь от технологий и потеряешь конкурентные преимущества?",
      description: "Уже сегодня ИИ меняет рынок труда и бизнес-процессы. Те, кто освоит эти инструменты раньше, получат значительное преимущество."
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
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Знакомо?</h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Все это решаемо. И проще, чем кажется.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-card hover:shadow-lg transition-shadow duration-300">
                <CardBody className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={problem.icon} className="text-gold text-2xl" />
                    </div>
                    <h3 className="text-deep-blue font-semibold text-xl mb-3">{problem.title}</h3>
                    <p className="text-text-gray">{problem.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};