import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ProgramSection: React.FC = () => {
  const modules = [
    {
      title: "Основы работы с текстовыми ИИ",
      content: [
        "Что такое ChatGPT, Claude, Gemini и как выбрать подходящий",
        "Базовые принципы работы нейросетей",
        "Настройка рабочего пространства"
      ]
    },
    {
      title: "Искусство создания промтов",
      content: [
        "Структура эффективного промта",
        "5 принципов «разговора» с ИИ",
        "Типичные ошибки и как их избежать"
      ]
    },
    {
      title: "Продвинутые техники промтинга",
      content: [
        "Chain-of-Thought и другие техники",
        "Ролевые промты и контекстное обучение",
        "Работа с длинными текстами и документами"
      ]
    },
    {
      title: "ИИ для разных сфер деятельности",
      content: [
        "Бизнес: планы, анализ, стратегии",
        "Маркетинг: контент, реклама, SMM",
        "Образование и самообучение",
        "Творчество и личные проекты"
      ]
    },
    {
      title: "Улучшение и редактирование текстов",
      content: [
        "Как «прокачать» любой текст с помощью ИИ",
        "Адаптация контента под разные аудитории",
        "Проверка фактов и улучшение стиля"
      ]
    },
    {
      title: "Автоматизация без кода",
      content: [
        "Создание рабочих процессов с ИИ",
        "Интеграция в ежедневные задачи",
        "Batch-обработка больших объемов контента"
      ]
    },
    {
      title: "Исследования и анализ с ИИ",
      content: [
        "Сбор и обработка информации",
        "Создание аналитических отчетов",
        "Генерация инсайтов и выводов"
      ]
    }
  ];

  return (
    <section id="program" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Программа курса — от основ до мастерства
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Структурированный подход к обучению поможет тебе последовательно освоить 
            все аспекты работы с текстовыми нейросетями.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion variant="bordered" className="bg-white rounded-lg shadow-card">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                title={
                  <div className="flex items-center gap-3">
                    <div className="bg-gold/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold">{index + 1}</span>
                    </div>
                    <span className="text-deep-blue font-semibold">{module.title}</span>
                  </div>
                }
                aria-label={`Модуль ${index + 1}: ${module.title}`}
                classNames={{
                  title: "text-deep-blue",
                  content: "text-text-gray"
                }}
              >
                <ul className="space-y-2 pl-11">
                  {module.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon icon="lucide:check" className="text-deep-blue mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-deep-blue font-medium">
            Каждый модуль включает теоретическую часть и практические задания для закрепления
          </p>
        </div>
      </div>
    </section>
  );
};