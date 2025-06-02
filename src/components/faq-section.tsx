import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Нужен ли опыт работы с ИИ?",
      answer: "Нет, курс создан для изучения с нуля. Все объясняю простым языком."
    },
    {
      question: "Сколько времени нужно на обучение?",
      answer: "Рекомендую 1-2 часа в день в течение 2 недель. Можете учиться в своем темпе."
    },
    {
      question: "Будет ли поддержка после курса?",
      answer: "Да, 2 недели активной поддержки в чате + доступ в сообщество выпускников."
    },
    {
      question: "Подходит ли курс для моей сферы?",
      answer: "Принципы работы с ИИ универсальны. В курсе разбираем примеры для разных сфер: бизнес, маркетинг, образование, творчество. База, которая подойдет для разных текстовых ИИ."
    },
    {
      question: "Что если курс не подойдет?",
      answer: "Курс создан на основе моего опыта в преподавании и реальной практики применения ИИ. Все техники проверены и работают. Изучи программу внимательно перед покупкой."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Ответы на частые вопросы
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Всё, что нужно знать перед началом обучения
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
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={<span className="text-deep-blue font-semibold">{faq.question}</span>}
                aria-label={faq.question}
                classNames={{
                  title: "text-deep-blue",
                  content: "text-text-gray"
                }}
              >
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-text-gray">
            Остались вопросы? <a href="#contact" className="text-deep-blue font-medium">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
};