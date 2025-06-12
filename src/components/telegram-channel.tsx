import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const TelegramChannel: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Получай актуальные инсайты по ИИ регулярно
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Присоединяйся к экспертам, которые уже используют мои техники
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto bg-light-gray rounded-lg p-8 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-deep-blue/10 w-32 h-32 rounded-full flex items-center justify-center">
                <Icon icon="logos:telegram" className="text-6xl" />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-deep-blue font-semibold text-xl mb-3">
                Telegram-канал FanisProAI
              </h3>
              <p className="text-text-gray mb-6">
                В моем канале я регулярно публикую практические советы по работе с ИИ, 
                готовые промты для разных задач и разборы интересных кейсов. 
                Присоединяйся, чтобы быть в курсе последних трендов и инструментов!
              </p>
              
              <Button 
                color="secondary"
                size="lg"
                className="font-bold"
                startContent={<Icon icon="lucide:send" />}
                as="a"
                href="https://t.me/fanisproai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).ym) {
                    (window as any).ym(98765432, 'reachGoal', 'telegram_click');
                  }
                }}
              >
                Получить доступ к инсайтам
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};