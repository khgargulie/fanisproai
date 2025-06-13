import React from "react";
import { Button, Input, Textarea, Link } from "@heroui/react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Icon } from "@iconify/react";

export const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-lg mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center py-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Не уверен, что ИИ для тебя?
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Давай разберёмся за 15 минут — без обязательств
            </p>
            <div className="text-left mb-8">
              <h4 className="text-xl font-semibold mb-4">Что получишь:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-gold text-xl mt-0.5 flex-shrink-0" />
                  <span>Честную оценку: нужен ли тебе ИИ вообще</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-gold text-xl mt-0.5 flex-shrink-0" />
                  <span>Конкретные примеры для твоей сферы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="lucide:check-circle" className="text-gold text-xl mt-0.5 flex-shrink-0" />
                  <span>План действий — даже если ничего не купишь</span>
                </li>
              </ul>
            </div>
            <p className="text-lg font-semibold mb-8">
              Никаких продаж. Только польза.
            </p>
            <Button 
              color="secondary"
              size="lg"
              className="font-bold text-base px-8"
              startContent={<Icon icon="lucide:message-circle" />}
              as="a"
              href="https://api.whatsapp.com/send/?phone=79047133714&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%A4%D0%B0%D0%BD%D0%B8%D1%81.%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D0%BA%D1%83%D1%80%D1%81%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%98%D0%98.%20%D0%A3%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81....&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).ym) {
                  (window as any).ym(102354151, 'reachGoal', 'consultation_click');
                }
              }}
            >
              Бесплатная консультация
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

