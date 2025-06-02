import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ExpertiseSection: React.FC = () => {
  const cases = [
    {
      icon: "lucide:clipboard",
      problem: "У Рамили возникла задача – составить бизнес-план по учебе, однако данные не помещались в один промт и результат был «корявый».",
      solution: "Объяснил Рамиле, как разбить данные и сформулировать четкий промт.",
      result: "1700 рублей за 5 минут"
    },
    {
      icon: "lucide:wheat",
      problem: "Айгуль обратилась ко мне с запросом для сельского хозяйства – нужно было получить максимально подробные нюансы отрасли.",
      solution: "Уточнил у нее информацию, которую она не принимала в расчет, но важную для ИИ, составил правильный промт. ChatGPT предложил множество различных решений.",
      result: "Один точный промт и нужный ответ за несколько секунд"
    },
    {
      icon: "lucide:table",
      problem: "Хава несколько часов потратила на решение проблемы с отображением таблицы Excel.",
      solution: "Составил цепочку промтов, которые помогли найти решение.",
      result: "Вместо нескольких часов поиска — 25 минут с правильными промптами и готовое решение"
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
            Доказательства экспертности
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Реальные кейсы и отзывы моих учеников и клиентов
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/aisha-photo.jpg" 
                  alt="Отзыв ученика" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Аиша</h3>
                <p className="text-sm opacity-80">Блогер</p>
              </div>
            </div>
            <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Icon icon="lucide:video" className="text-4xl mb-2" />
                <p>Видеоотзыв с Rutube</p>
                <p className="text-sm opacity-70">(Будет добавлен позже)</p>
              </div>
            </div>
            <p className="italic">
              "Сама обучаю ИИ. Решила получить более глубокие знания и не ошиблась - очень много конкретных практических примеров как можно четче писать промты, о которых не знала. Теперь получаю нужные ответы от ИИ в разы быстрее и при помощи ИИ экономлю минимум 2 часа каждый день на рутинных задачах"
            </p>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cases.map((caseItem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white text-text-gray h-full">
                <CardBody className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={caseItem.icon} className="text-gold text-2xl" />
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-deep-blue font-semibold mb-2">Проблема:</h4>
                      <p>{caseItem.problem}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-deep-blue font-semibold mb-2">Решение:</h4>
                      <p>{caseItem.solution}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-deep-blue font-semibold mb-2">Результат:</h4>
                      <p className="text-gold font-bold">{caseItem.result}</p>
                    </div>
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