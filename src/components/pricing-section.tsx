import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const PricingSection: React.FC = () => {
  const features = [
    "7 модулей обучения (5+ часов видео)",
    "Библиотека из 50+ готовых промтов",
    "Поддержка в чате 2 недели",
    "Доступ к материалам навсегда",
    "Практические задания с разбором"
  ];

  const bonuses = [
    {
      title: "Чек-лист «50 способов применения ИИ в бизнесе»",
      description: "Готовые идеи для внедрения ИИ в различные бизнес-процессы"
    },
    {
      title: "Практический урок: «Как научить GPT выступать в роли учителя по арабскому (и любому другому языку)»",
      description: "Пошаговая инструкция по созданию персонального языкового тренера"
    },
    {
      title: "Практический урок: «Использование ИИ для ведения блога: несколько сценариев»",
      description: "Готовые стратегии для создания и управления контентом с помощью ИИ"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Стоимость и бонусы
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Инвестиция в навыки, которые окупятся многократно
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="shadow-card border-2 border-deep-blue">
            <CardBody className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-gold text-4xl font-bold mb-2">7 000 рублей</h3>
                <p className="text-text-gray">Единоразовый платеж</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-deep-blue font-semibold text-lg mb-4">Что входит:</h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon icon="lucide:check-circle" className="text-deep-blue text-xl mt-0.5 flex-shrink-0" />
                      <span className="text-text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-deep-blue font-semibold text-lg mb-4">Дополнительные бонусы:</h4>
                <div className="space-y-4">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="bg-light-gray rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-gold/20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon icon="lucide:gift" className="text-gold text-xl" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-deep-blue mb-1">{bonus.title}</h5>
                          <p className="text-text-gray text-sm">{bonus.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  color="secondary"
                  size="lg"
                  className="font-bold text-base px-8"
                  onPress={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ЗАПИСАТЬСЯ НА КУРС
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};