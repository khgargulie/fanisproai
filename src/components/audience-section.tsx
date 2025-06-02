import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      icon: "lucide:user-plus",
      title: "Новичок в ИИ",
      description: "Хочешь разобраться с нуля и получить четкую систему работы с текстовыми нейросетями"
    },
    {
      icon: "lucide:briefcase",
      title: "Предприниматель",
      description: "Ищешь способы оптимизировать бизнес-процессы и сократить расходы с помощью ИИ"
    },
    {
      icon: "lucide:award",
      title: "Эксперт/Специалист",
      description: "Нужно автоматизировать рутину и повысить продуктивность в своей профессиональной деятельности"
    },
    {
      icon: "lucide:frown",
      title: "«Пробовал, но не получилось»",
      description: "Уже использовал ChatGPT, но результаты разочаровали и не оправдали ожиданий"
    },
    {
      icon: "lucide:target",
      title: "Перфекционист",
      description: "Хочешь освоить ИИ профессионально, а не поверхностно, и получить максимум от технологии"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Этот курс для тебя, если ты:
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Независимо от твоего опыта и сферы деятельности, курс поможет освоить 
            работу с ИИ и применить эти навыки на практике.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {audiences.map((audience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full shadow-card hover:shadow-lg transition-shadow duration-300">
                <CardBody className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={audience.icon} className="text-gold text-2xl" />
                    </div>
                    <h3 className="text-deep-blue font-semibold text-xl mb-3">{audience.title}</h3>
                    <p className="text-text-gray">{audience.description}</p>
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