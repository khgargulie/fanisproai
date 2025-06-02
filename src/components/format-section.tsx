import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const FormatSection: React.FC = () => {
  const formatFeatures = [
    {
      icon: "lucide:video",
      title: "7 модулей в формате видеоуроков",
      description: "Общая длительность более 5 часов качественного контента"
    },
    {
      icon: "lucide:clipboard-check",
      title: "Практические задания",
      description: "После каждого урока для закрепления материала"
    },
    {
      icon: "lucide:message-circle",
      title: "Поддержка в закрытом Telegram-чате",
      description: "2 недели активной поддержки от преподавателя и сообщества"
    },
    {
      icon: "lucide:clock",
      title: "Обучение в своем темпе",
      description: "Рекомендуем 2 недели для полного освоения материала"
    },
    {
      icon: "lucide:key",
      title: "Доступ к материалам 1 год",
      description: "Можешь пересматривать когда угодно и сколько угодно"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Удобный формат для занятых людей
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Курс создан с учетом плотного графика современных профессионалов — 
            учись когда удобно, применяй сразу.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="shadow-card border border-deep-blue/10">
            <CardBody className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formatFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon={feature.icon} className="text-gold text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-deep-blue font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-text-gray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-light-gray">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:alert-circle" className="text-deep-blue text-xl" />
                  <p className="text-deep-blue font-medium">
                    Все материалы доступны онлайн 24/7 — никаких жестких расписаний и дедлайнов
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};