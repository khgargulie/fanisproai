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
    },
    {
      question: "Заменит ли ИИ мою работу?",
      answer: "ИИ не заменяет людей, а усиливает их возможности. Те, кто научится работать с ИИ, получат преимущество над теми, кто этого не делает. Курс научит вас использовать ИИ как инструмент для повышения эффективности, а не как замену вашим навыкам."
    },
    {
      question: "Сколько реально можно сэкономить времени?",
      answer: "При правильном применении техник из курса можно сэкономить 10-15 часов в неделю. Это время, которое обычно тратится на написание текстов, планирование, анализ информации и другие рутинные задачи. Результат зависит от вашей сферы деятельности и готовности применять полученные знания."
    },
    {
      question: "Подходит ли для технических/творческих задач?",
      answer: "Да, ИИ отлично справляется как с техническими задачами (написание кода, анализ данных, создание документации), так и с творческими (генерация идей, написание текстов, создание концепций). В курсе разбираем примеры для обеих сфер и показываем, как адаптировать техники под ваши задачи."
    },
    {
      question: "Что если я совсем не технарь?",
      answer: "Курс создан специально для обычных людей, не программистов. Никаких сложных технических знаний не требуется. Все инструменты, которые мы изучаем, имеют простой интерфейс, как у обычных мессенджеров. Главное — понимать принципы работы с ИИ, а не техническую сторону."
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
            Остались вопросы? <a href="#contact" className="text-deep-blue font-medium">Свяжитесь со мной</a>
          </p>
        </div>
      </div>
    </section>
  );
};